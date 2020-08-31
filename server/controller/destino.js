const Destino = require('../models').Destino;

module.exports = {

    async getAllDestinos(req,res) {

        try {

            const destinoCollection = await Destino.findAll({});

            res.status(201).send(destinoCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const destinoCollection = await Destino
            .create({

                callePrincipalDestino : req.body.callePrincipalDestino,
                calleSecundariaDestino : req.body.calleSecundariaDestino,
                referenciaDestino : req.body.referenciaDestino,
                horaLlegadaDestino : req.body.horaLlegadaDestino,
                latitudDestino : req.body.latitudDestino,
                longitudDestino : req.body.longitudDestino
            });

            res.status(201).send(destinoCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const destinoCollection = await Destino.find({
                id : req.params.destinoId
            });

            if(destinoCollection){

                const updatedDestino = await Destino.update({
                    callePrincipalDestino : req.body.callePrincipalDestino,
                    calleSecundariaDestino : req.body.calleSecundariaDestino,
                    referenciaDestino : req.body.referenciaDestino,
                    horaLlegadaDestino : req.body.horaLlegadaDestino,
                    latitudDestino : req.body.latitudDestino,
                    longitudDestino : req.body.longitudDestino                 
                });

                res.status(201).send(updatedDestino)

            }
            else{

                res.status(404).send("Destino Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 


}