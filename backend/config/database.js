// backend/config/database.js
const config = require('./index');
// const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD } = process.env;

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: 'sqlite',
    seederStorage: 'sequelize',
    logQueryParameters: true,
    typeValidation: true
  },
  // development: {
  //   username: DEV_DATABASE_USERNAME,
  //   password: DEV_DATABASE_PASSWORD,
  //   database: "postgres",
  //   host: DEV_DATABASE_HOST,
  //   dialect: "postgres",
  // },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.SCHEMA
    }
  }
};