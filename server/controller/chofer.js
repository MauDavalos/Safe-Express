const Chofer = require('../models').Chofer;

module.exports = {

    async getAllChoferes(req,res) {

        try {

            const choferCollection = await Chofer.findAll({});

            res.status(201).send(choferCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const choferCollection = await Chofer
            .create({
                nombres : req.body.nombres,
                apellidos : req.body.apellidos,
                email : req.body.email,
                username : req.body.username,
                password : req.body.password,
            });

            res.status(201).send(choferCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const choferCollection = await Chofer.find({
                id : req.params.choferId
            });

            if(choferCollection){

                const updatedChofer = await Chofer.update({
                    nombres : req.body.nombres,
                    apellidos : req.body.apellidos,
                    email : req.body.email,
                    username : req.body.username,
                    password : req.body.password,                    
                });

                res.status(201).send(updatedChofer)

            }
            else{

                res.status(404).send("Chofer Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 


}