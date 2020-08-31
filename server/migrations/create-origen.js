module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Origens', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        callePrincipalOrigen: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        calleSecundariaOrigen: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        referenciaOrigen: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        horaInicioOrigen: {
            type: Sequelize.TIME,
            allowNull: false,
          },
        latitudOrigen: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        longitudOrigen: {
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Origens'),
  };