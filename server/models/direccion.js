module.exports = (sequelize,DataTypes) => {
    let Direccion = sequelize.define('Direccion',{
       
    });

    /*Direccion.associate = function (models) {
        Direccion.belongsTo(models.Encomienda,{
            onDelete : "CASCADE",
            foreignKey : 'encomiendaId'
        });   
    };
    
    Direccion.associate = function (models) {
        Direccion.belongsTo(models.Origen,{
            onDelete : "CASCADE",
            foreignKey : 'origenId'
        });   
    };

    Direccion.associate = function (models) {
        Direccion.belongsTo(models.Destino,{
            onDelete : "CASCADE",
            foreignKey : 'destinoId'
        });   
    };*/

    return Direccion;
}

