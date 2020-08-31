module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Chofers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        nombres: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        password: {
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Chofers'),
  };