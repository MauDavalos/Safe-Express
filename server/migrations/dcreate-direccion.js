module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Direccions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        origenId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Origens',
                key : 'id',
                as : 'origenId'
            },
        },
        destinoId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Destinos',
                key : 'id',
                as : 'destinoId'
            },
        },
        encomiendaId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Encomiendas',
                key : 'id',
                as : 'encomiendaId'
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Direccions'),
  };