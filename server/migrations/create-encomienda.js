module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Encomiendas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        id_tracking: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        hora: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        clienteId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Clientes',
                key : 'id',
                as : 'clienteId'
            },
        },
        choferId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Chofers',
                key : 'id',
                as : 'choferId'
            },
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Encomiendas'),
  };