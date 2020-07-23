const Cliente = require('../models').Cliente;

module.exports = {

    async getAllClientes(req,res) {

        try {

            const clienteCollection = await Cliente.findAll({});

            res.status(201).send(clienteCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const clienteCollection = await Cliente
            .create({
                nombres : req.body.nombres,
                apellidos : req.body.apellidos,
                email : req.body.email,
                username : req.body.username,
                password : req.body.password,
            });

            res.status(201).send(clienteCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const clienteCollection = await Cliente.find({
                id : req.params.clienteId
            });

            if(clienteCollection){

                const updatedCliente = await Cliente.update({
                    nombres : req.body.nombres,
                    apellidos : req.body.apellidos,
                    email : req.body.email,
                    username : req.body.username,
                    password : req.body.password,                    
                });

                res.status(201).send(updatedCliente)

            }
            else{

                res.status(404).send("Cliente Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 


}