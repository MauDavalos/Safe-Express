const Sequelize = require('sequelize');
const db = require('../config/database');

const Encomienda = db.define('encomienda', {
  calle_principal: {
    type: Sequelize.STRING
  },
  calle_secundaria: {
    type: Sequelize.STRING
  },
  referencia: {
    type: Sequelize.STRING
  },
  hora_llegada: {
    type: Sequelize.TIME
  },
  latitud: {
    type: Sequelize.STRING
  },
  longitud: {
    type: Sequelize.STRING
  }
});

Origen.sync().then(() => {
  console.log('table ENCOMIENDA created');
});
module.exports = Encomienda;