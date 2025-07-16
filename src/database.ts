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


export const initProductTable = async () => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          brand TEXT,
          price REAL,
          image TEXT
        );`,
        [],
        () => resolve(true),
        (_, error) => {
          console.log('Error creating product table:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};

export const getAllProducts = async (): Promise<any[]> => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM products;',
        [],
        (_, result) => {
          const items: any[] = [];
          for (let i = 0; i < result.rows.length; i++) {
            items.push(result.rows.item(i));
          }
          resolve(items);
        },
        (_, error) => {
          console.log('Get all products error:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};


export const insertProduct = async (name: string, brand: string, price: number, image: string) => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        'INSERT INTO products (name, brand, price, image) VALUES (?, ?, ?, ?);',
        [name, brand, price, image],
        (_, result) => resolve(result),
        (_, error) => {
          console.log('Insert product error:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};

export const updateProduct = async (id: number, name: string, brand: string, price: number, image: string) => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        'UPDATE products SET name = ?, brand = ?, price = ?, image = ? WHERE id = ?;',
        [name, brand, price, image, id],
        (_, result) => resolve(result),
        (_, error) => {
          console.log('Update product error:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};

export const deleteProduct = async (id: number) => {
  const database = await db;
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        'DELETE FROM products WHERE id = ?;',
        [id],
        (_, result) => resolve(result),
        (_, error) => {
          console.log('Delete product error:', error);
          reject(error);
          return true;
        }
      );
    });
  });
};
