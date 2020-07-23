
module.exports = (sequelize,DataTypes) => {
    let Chofer = sequelize.define('Chofer',{
        nombres : DataTypes.STRING,
        apellidos : DataTypes.STRING,
        email : DataTypes.STRING,
        username : DataTypes.STRING,
        password : DataTypes.STRING
    });

    Chofer.associate = function(models) {
        Chofer.hasMany(models.Encomienda,{
            foreignKey : 'choferId',
            as : 'encomiendas'
        });
    };
    return Chofer;
}