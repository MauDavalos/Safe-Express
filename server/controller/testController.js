'use strict';
const {Pool} = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "mau",
    database: "db_hoy",
    port: 5432
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