module.exports = (sequelize,DataTypes) => {
    let Encomienda = sequelize.define('Encomienda',{
        id_tracking : DataTypes.INTEGER,
        estado : DataTypes.STRING,
        fecha : DataTypes.TIME,
        hora : DataTypes.TIME
    });

    Encomienda.associate = function (models) {
        Encomienda.belongsTo(models.Cliente,{
            onDelete : "CASCADE",
            foreignKey : 'clienteId'
        });   
    };

    Encomienda.associate = function (models) {
        Encomienda.belongsTo(models.Chofer,{
            onDelete : "CASCADE",
            foreignKey : 'choferId'
        });   
    };

    Encomienda.associate = function(models) {
        Encomienda.hasMany(models.Direccion,{
            foreignKey : 'encomiendaId',
            as : 'direcciones'
        });
    };

    Encomienda.associate = function(models){
        Encomienda.belongsToMany(models.Origen,{
            through: 'direccion',
            foreignKey: 'encomiendaId',
            otherKey:'origenId'
        });
    };

    Encomienda.associate = function(models){
        Encomienda.belongsToMany(models.Destino,{
            through: 'direccion',
            foreignKey: 'encomiendaId',
            otherKey:'destinoId'
        });
    };

    

    return Encomienda;
}

