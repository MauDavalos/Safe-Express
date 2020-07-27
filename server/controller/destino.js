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

                callePrincipal : req.body.callePrincipal,
                calleSecundaria : req.body.calleSecundaria,
                referencia : req.body.referencia,
                horaLlegada : req.body.horaLlegada,
                latitud : req.body.latitud,
                longitud : req.body.longitud
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
                    callePrincipal : req.body.callePrincipal,
                    calleSecundaria : req.body.calleSecundaria,
                    referencia : req.body.referencia,
                    horaLlegada : req.body.horaLlegada,
                    latitud : req.body.latitud,
                    longitud : req.body.longitud                 
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