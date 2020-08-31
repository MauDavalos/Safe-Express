
module.exports = (sequelize,DataTypes) => {
    let Cliente = sequelize.define('Cliente',{
        nombres : DataTypes.STRING,
        apellidos : DataTypes.STRING,
        email : DataTypes.STRING,
        username : DataTypes.STRING,
        password : DataTypes.STRING
    });

    Cliente.associate = function(models) {
        Cliente.hasMany(models.Encomienda,{
            foreignKey : 'clienteId',
            as : 'encomiendas'
        });
    };
    return Cliente;
}