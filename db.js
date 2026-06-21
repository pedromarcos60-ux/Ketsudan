// Banco de dados local baseado em IndexedDB para o Ketsudan
const KetsudanDB = {
  dbName: "KetsudanDB",
  dbVersion: 1,
  db: null,

  // Inicializa o banco de dados e cria as object stores (tabelas) necessárias
  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = (event) => {
        console.error("Erro ao inicializar IndexedDB:", event.target.error);
        reject(event.target.error);
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
    });
  },

  // Retorna um usuário cadastrado pelo email
  getUser(email) {
    return new Promise((resolve, reject) => {
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
      if (!this.db) return reject("Banco de dados não inicializado.");
      const resultData = {
        email,
        testType,
        answers,
        dominantArea,
        timestamp: new Date().toISOString()
      };

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
      if (!this.db) return reject("Banco de dados não inicializado.");
      const transaction = this.db.transaction(["test_results"], "readonly");
      const store = transaction.objectStore("test_results");
      const index = store.index("email");
      const request = index.getAll(email);

      request.onsuccess = (event) => {
        const results = event.target.result || [];
        // Ordenar decrescente por data/timestamp
        results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        resolve(results);
      };
      request.onerror = (event) => reject(event.target.error);
    });
  },

  // Limpa o histórico de testes de um usuário específico
  clearTestResults(email) {
    return new Promise((resolve, reject) => {
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
