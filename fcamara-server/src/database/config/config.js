module.exports = {
  production : {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
    "dialectModule": "mysql2"
  },
  development : {
    "username": "fcamara-admin",
    "password": "0myadmSQLFCamarapass1",
    "database": "fcamara",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectModule": "mysql2"
  }
}