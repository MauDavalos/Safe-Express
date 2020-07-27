module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Destinos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        callePrincipal: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        calleSecundaria: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        referencia: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        horaLlegada: {
            type: Sequelize.TIME,
            allowNull: false,
          },
        latitud: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        longitud: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Destinos'),
  };