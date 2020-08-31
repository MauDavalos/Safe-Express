module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Destinos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        callePrincipalDestino: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        calleSecundariaDestino: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        referenciaDestino: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        horaLlegadaDestino: {
            type: Sequelize.TIME,
            allowNull: false,
          },
        latitudDestino: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        longitudDestino: {
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
        }
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Destinos'),
  };