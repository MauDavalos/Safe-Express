const Sequelize = require('sequelize');
const db = require('../config/database');

const Destino = db.define('destino', {
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
  console.log('table DESTINO created');
});
module.exports = Origen;