
module.exports = (sequelize,DataTypes) => {
    let Origen = sequelize.define('Origen',{
        callePrincipalOrigen : DataTypes.STRING,
        calleSecundariaOrigen : DataTypes.STRING,
        referenciaOrigen : DataTypes.STRING,
        horaInicioOrigen : DataTypes.TIME,
        latitudOrigen : DataTypes.STRING,
        longitudOrigen : DataTypes.STRING
    });

    /*Origen.associate = function(models) {
        Origen.hasMany(models.Direccion,{
            foreignKey : 'origenId',
            as : 'direcciones'
        });
    };*/   

    Origen.associate = function(models){
        Origen.belongsToMany(models.Encomienda,{
            through: 'direccion',
            foreignKey: 'origenId',
            otherKey:'encomiendaId'
        });
    };


    return Origen;
}