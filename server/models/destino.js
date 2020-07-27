module.exports = (sequelize,DataTypes) => {
    let Destino = sequelize.define('Destino',{
        callePrincipal : DataTypes.STRING,
        calleSecundaria : DataTypes.STRING,
        referencia : DataTypes.STRING,
        horaLlegada : DataTypes.TIME,
        latitud : DataTypes.STRING,
        longitud : DataTypes.STRING
    });

    /*Origen.associate = function(models) {
        Chofer.hasMany(models.Encomienda,{
            foreignKey : 'choferId',
            as : 'encomiendas'
        });
    };*/
    return Destino;
}