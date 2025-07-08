import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const db = SQLite.openDatabase({ name: 'app.db', location: 'default' });

export const initUserTable = async () => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE,
          password TEXT,
          role TEXT
        );`,
        [],
        () => resolve(true),
        (_, error) => {
          console.log('Error creating user table:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};

export const insertUser = async (email: string, password: string, role: string) => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `INSERT INTO users (email, password, role) VALUES (?, ?, ?);`,
        [email, password, role],
        (_, result) => resolve(result),
        (_, error) => {
          console.log('Insert user error:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};
export const getUserByEmailAndPassword = async (email: string, password: string) => {
  const database = await db;
  return new Promise<any>((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          console.log('Query error:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};
