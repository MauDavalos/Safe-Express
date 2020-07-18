const Sequelize = require('sequelize');

module.exports =  new Sequelize('safe_express', 'root', '',{
  host: 'localhost',
  dialect: 'mysql'
});

