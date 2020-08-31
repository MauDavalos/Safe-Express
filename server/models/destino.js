module.exports = (sequelize,DataTypes) => {
    let Destino = sequelize.define('Destino',{
        callePrincipalDestino : DataTypes.STRING,
        calleSecundariaDestino : DataTypes.STRING,
        referenciaDestino : DataTypes.STRING,
        horaLlegadaDestino : DataTypes.TIME,
        latitudDestino : DataTypes.STRING,
        longitudDestino : DataTypes.STRING
    });

    /*Destino.associate = function(models) {
        Destino.hasMany(models.Direccion,{
            foreignKey : 'destinoId',
            as : 'direcciones'
        });
    };*/

    Destino.associate = function(models){
        Destino.belongsToMany(models.Encomienda,{
            through: 'direccion',
            foreignKey: 'destinoId',
            otherKey:'encomiendaId'
        });
    };
    return Destino;
}