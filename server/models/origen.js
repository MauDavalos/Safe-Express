
module.exports = (sequelize,DataTypes) => {
    let Origen = sequelize.define('Origen',{
        callePrincipal : DataTypes.STRING,
        calleSecundaria : DataTypes.STRING,
        referencia : DataTypes.STRING,
        horaInicio : DataTypes.TIME,
        latitud : DataTypes.STRING,
        longitud : DataTypes.STRING
    });

    /*Origen.associate = function(models) {
        Chofer.hasMany(models.Encomienda,{
            foreignKey : 'choferId',
            as : 'encomiendas'
        });
    };*/
    return Origen;
}