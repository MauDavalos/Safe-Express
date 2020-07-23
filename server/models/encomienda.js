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

    return Encomienda;
}

