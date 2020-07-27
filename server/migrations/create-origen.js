module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Origens', {
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
        horaInicio: {
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Origens'),
  };