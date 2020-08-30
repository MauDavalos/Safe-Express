const Origen = require('../models').Origen;

module.exports = {

    async getAllOrigenes(req,res) {

        try {

            const origenCollection = await Origen.findAll({});

            res.status(201).send(origenCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const origenCollection = await Origen
            .create({

                callePrincipalOrigen : req.body.callePrincipalOrigen,
                calleSecundariaOrigen : req.body.calleSecundariaOrigen,
                referenciaOrigen : req.body.referenciaOrigen,
                horaInicioOrigen : req.body.horaInicioOrigen,
                latitudOrigen : req.body.latitudOrigen,
                longitudOrigen : req.body.longitudOrigen
            });

            res.status(201).send(origenCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const origenCollection = await Origen.find({
                id : req.params.origenId
            });

            if(origenCollection){

                const updatedOrigen = await Origen.update({
                    callePrincipalOrigen : req.body.callePrincipalOrigen,
                    calleSecundariaOrigen : req.body.calleSecundariaOrigen,
                    referenciaOrigen : req.body.referenciaOrigen,
                    horaInicioOrigen : req.body.horaInicioOrigen,
                    latitudOrigen : req.body.latitudOrigen,
                    longitudOrigen : req.body.longitudOrigen                 
                });

                res.status(201).send(updatedOrigen)

            }
            else{

                res.status(404).send("Origen Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 


}