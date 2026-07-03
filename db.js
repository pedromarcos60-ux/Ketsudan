// Banco de dados local baseado em IndexedDB para o Ketsudan
const KetsudanDB = {
  dbName: "KetsudanDB",
  dbVersion: 1,
  db: null,
  useMemoryDB: false,
  memoryStore: {
    users: {},
    test_results: []
  },

  // Inicializa o banco de dados e cria as object stores (tabelas) necessárias
  init() {
    return new Promise((resolve, reject) => {
      try {
        if (typeof indexedDB === "undefined") {
          throw new Error("IndexedDB não é suportado.");
        }
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onerror = (event) => {
          console.warn("Erro IndexedDB, ativando banco em memória:", event.target.error);
          this.useMemoryDB = true;
          resolve(null);
        };

        request.onsuccess = (event) => {
          this.db = event.target.result;
          console.log("Banco de dados local KetsudanDB pronto.");
          resolve(this.db);
        };

        request.onupgradeneeded = (event) => {
          const db = event.target.result;

          // Tabela de usuários (chave primária é o email)
          if (!db.objectStoreNames.contains("users")) {
            db.createObjectStore("users", { keyPath: "email" });
          }

          // Tabela de histórico de testes (autoincrementável com index por email)
          if (!db.objectStoreNames.contains("test_results")) {
            const resultsStore = db.createObjectStore("test_results", { keyPath: "id", autoIncrement: true });
            resultsStore.createIndex("email", "email", { unique: false });
          }
        };
      } catch (error) {
        console.warn("Erro ao inicializar IndexedDB, usando banco em memória:", error);
        this.useMemoryDB = true;
        resolve(null);
      }
    });
  },

  // Retorna um usuário cadastrado pelo email
  getUser(email) {
    return new Promise((resolve, reject) => {
      if (this.useMemoryDB) {
        return resolve(this.memoryStore.users[email] || null);
      }
      if (!this.db) return reject("Banco de dados não inicializado.");
      const transaction = this.db.transaction(["users"], "readonly");
      const store = transaction.objectStore("users");
      const request = store.get(email);

      request.onsuccess = (event) => resolve(event.target.result || null);
      request.onerror = (event) => reject(event.target.error);
    });
  },

  // Salva ou atualiza um usuário no banco
  saveUser(user) {
    return new Promise((resolve, reject) => {
      if (this.useMemoryDB) {
        this.memoryStore.users[user.email] = JSON.parse(JSON.stringify(user));
        return resolve(true);
      }
      if (!this.db) return reject("Banco de dados não inicializado.");
      const transaction = this.db.transaction(["users"], "readwrite");
      const store = transaction.objectStore("users");
      const request = store.put(user);

      request.onsuccess = () => resolve(true);
      request.onerror = (event) => reject(event.target.error);
    });
  },

  // Salva o resultado de um teste associado a um usuário (email)
  saveTestResult(email, testType, answers, dominantArea) {
    return new Promise((resolve, reject) => {
      const resultData = {
        email,
        testType,
        answers,
        dominantArea,
        timestamp: new Date().toISOString()
      };

      if (this.useMemoryDB) {
        const nextId = this.memoryStore.test_results.length + 1;
        resultData.id = nextId;
        this.memoryStore.test_results.push(resultData);
        return resolve(true);
      }

      if (!this.db) return reject("Banco de dados não inicializado.");

      const transaction = this.db.transaction(["test_results"], "readwrite");
      const store = transaction.objectStore("test_results");
      const request = store.add(resultData);

      request.onsuccess = () => resolve(true);
      request.onerror = (event) => reject(event.target.error);
    });
  },

  // Obtém todos os resultados de teste de um usuário ordenados do mais recente para o mais antigo
  getTestResults(email) {
    return new Promise((resolve, reject) => {
      if (this.useMemoryDB) {
        const results = this.memoryStore.test_results.filter(r => r.email === email);
        results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        return resolve(JSON.parse(JSON.stringify(results)));
      }

      if (!this.db) return reject("Banco de dados não inicializado.");
      const transaction = this.db.transaction(["test_results"], "readonly");
      const store = transaction.objectStore("test_results");
      const index = store.index("email");
      const request = index.getAll(email);

      request.onsuccess = (event) => {
        const results = event.target.result || [];
        results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        resolve(results);
      };
      request.onerror = (event) => reject(event.target.error);
    });
  },

  // Limpa o histórico de testes de um usuário específico
  clearTestResults(email) {
    return new Promise((resolve, reject) => {
      if (this.useMemoryDB) {
        this.memoryStore.test_results = this.memoryStore.test_results.filter(r => r.email !== email);
        return resolve(true);
      }

      if (!this.db) return reject("Banco de dados não inicializado.");
      const transaction = this.db.transaction(["test_results"], "readwrite");
      const store = transaction.objectStore("test_results");
      const index = store.index("email");
      const request = index.openCursor(IDBKeyRange.only(email));

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve(true);
        }
      };
      request.onerror = (event) => reject(event.target.error);
    });
  }
};
