'use strict';
const mysql = require('mysql');

const pool = mysql.createConnection({
    username: "b3991f24f4b42b",
    password: "1107d0f0",
    database: "heroku_d226da270d3c37c?reconnect=true",
    host: "us-cdbr-east-02.cleardb.com",
    dialect: "mysql"
});

const getData = async (req, res) => {
    console.log('entro');
    const response = await pool.query('SELECT callePrincipal as callePrincipalOrigen, calleSecundaria as calleSecundariaOrigen, referencia , nombres as nombrechofer, apellidos as apellidoChofer, email as correoChofer, estado, fecha, hora FROM public."Encomiendas" inner join public."Chofers" on public."Encomiendas".id = public."Chofers".id');
    console.log('hola');
    res.status(200).json(response.rows);
};

module.exports = {
    getData
};