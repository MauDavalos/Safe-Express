"use strict";
const mysql = require('mysql');
var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
const bcrypt = require('bcrypt');
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(require('./routes/index')); // routes

const db = require('./config/database');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    app.get("/", (req,res) =>{
        console.log('hola');
    })



    app.post("/setCliente", (req,res) => {
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var username= req.body.username;
        var password= req.body.password;
        var correo = req.body.correo;
    
         console.log(nombres)
        if (nombres && apellidos && username && password && correo) { 
            mysqlConnection.query('INSERT INTO cliente(nombres , apellidos , username , password , correo) VALUES(?,?,?,?,?)', [nombres, apellidos, username, password, correo], (err, rows, fields) => {
                if (err) {
                    throw err;
                }else{ 
                    
                    res.send(true)
                } 		
                res.end();
            });
        } else {
            res.send('Ingrese datos de cliente!');
            res.end();
        }
    })


    app.post("/setChofer", (req,res) => {
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var username= req.body.username;
        var password= req.body.password;
        var correo = req.body.correo;
    
         console.log(nombres)
        if (nombres && apellidos && username && password && correo) { 
            mysqlConnection.query('INSERT INTO chofer(nombres , apellidos , username , password , correo) VALUES(?,?,?,?,?)', [nombres, apellidos, username, password, correo], (err, rows, fields) => {
                if (err) {
                    throw err;
                }else{ 
                    
                    res.send(true)
                } 		
                res.end();
            });
        } else {
            res.send('Ingrese datos de chofer!');
            res.end();
        }
    })

    app.post("/setChofer", (req,res) => {
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var username= req.body.username;
        var password= req.body.password;
        var correo = req.body.correo;
    
         console.log(nombres)
        if (nombres && apellidos && username && password && correo) { 
            mysqlConnection.query('INSERT INTO chofer(nombres , apellidos , username , password , correo) VALUES(?,?,?,?,?)', [nombres, apellidos, username, password, correo], (err, rows, fields) => {
                if (err) {
                    throw err;
                }else{ 
                    
                    res.send(true)
                } 		
                res.end();
            });
        } else {
            res.send('Ingrese datos de chofer!');
            res.end();
        }
    })


    app.get("/getTodosChoferes", (req,res) =>{
        const queryString = "select * from chofer"
        mysqlConnection.query(queryString, (err, rows, fields) => {
            res.json(rows)
        })
    })

    app.get("/getTodosClientes", (req,res) =>{
        const queryString = "select * from cliente"
        mysqlConnection.query(queryString, (err, rows, fields) => {
            res.json(rows)
        })
    })

    app.post("/registrarCliente",  async(req,res) => {
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var username = req.body.username
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        var correo = req.body.correo;
        
    
         console.log(nombres+' '+hashedPassword)
        if (nombres && hashedPassword) { 
            
    
            mysqlConnection.query('INSERT INTO cliente(nombres, apellidos, username, password, correo) VALUES(?,?,?,?,?)', [nombres, apellidos, username, hashedPassword, correo], (err, rows, fields) => {
                if (err) {
                    throw err;
                }else{ 
                    
                    res.send(true)
                } 		
                res.end();
            });
        } else {
            res.send('Ingrese datos de tabla cliente!');
            res.end();
        }
    })

    app.post("/registrarChofer",  async(req,res) => {
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var username = req.body.username
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        var correo = req.body.correo;
        
    
         console.log(nombres+' '+hashedPassword)
        if (nombres && hashedPassword) { 
            
    
            mysqlConnection.query('INSERT INTO chofer(nombres, apellidos, username, password, correo) VALUES(?,?,?,?,?)', [nombres, apellidos, username, hashedPassword, correo], (err, rows, fields) => {
                if (err) {
                    throw err;
                }else{ 
                    
                    res.send(true)
                } 		
                res.end();
            });
        } else {
            res.send('Ingrese datos de tabla chofer!');
            res.end();
        }
    })

    app.get("/cliente/:correo", (req,res) => {
        console.log("Devolviendo cliente con correo: " + req.params.correo)
        const clienteCorreo = req.params.correo
        const queryString = "select * from cliente where correo = ?"
         mysqlConnection.query(queryString, [clienteCorreo], (err, rows, fields) => {
            res.json(rows[0])
        })
    
    })

    app.get("/chofer/:correo", (req,res) => {
        console.log("Devolviendo chofer con correo: " + req.params.correo)
        const choferCorreo = req.params.correo
        const queryString = "select * from chofer where correo = ?"
         mysqlConnection.query(queryString, [choferCorreo], (err, rows, fields) => {
            res.json(rows[0])
        })
        //res.end()
    })