const Sequelize = require('sequelize');
const db = require('../config/database');

const Origen = db.define('origen', {
  calle_principal: {
    type: Sequelize.STRING
  },
  calle_secundaria: {
    type: Sequelize.STRING
  },
  referencia: {
    type: Sequelize.STRING
  },
  hora_inicio: {
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
  console.log('table ORIGEN created');
});
module.exports = Origen;