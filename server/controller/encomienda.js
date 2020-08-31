const Encomienda = require('../models').Encomienda;
const Cliente = require('../models').Cliente;
const Chofer = require('../models').Chofer;

module.exports = {

     async getAllEncomiendasOfCliente(req,res) {
        try {
            const clienteCollection = await Cliente.findAll({
                id : req.params.clienteId
            });

            if(clienteCollection){
                const encomiendaCollection = await Encomienda.findAll({
                    clienteId : req.params.clienteId
                })

                res.status(201).send(encomiendaCollection);
            }
            else{
                re.status(404).send("Cliente Not Found")
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }

    },

    async getAllEncomiendasOfChofer(req,res) {
        try {
            const choferCollection = await Chofer.findAll({
                id : req.params.choferId
            });

            if(choferCollection){
                const encomiendaCollection = await Encomienda.findAll({
                    choferId : req.params.choferId
                })

                res.status(201).send(encomiendaCollection);
            }
            else{
                re.status(404).send("Chofer Not Found")
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }

    },
///////////////aqui
    async createEncomienda(req,res) {

        try {
            const encomienda = await Encomienda.create({
                id_tracking : req.body.id_tracking,
                estado : req.body.estado,
                fecha : req.body.fecha,
                hora : req.body.hora,
                clienteId : req.body.clienteId,
                choferId : req.body.choferId
            });
            res.status(201).send(encomienda)
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req,res) {
        try{
            const encomiendaCollection = await Encomienda.find({
                id : req.params.encomiendaId
            });

            if(encomiendaCollection){
                const updatedEncomienda = await encomiendaCollection.update({
                    tracking_id : req.body.tracking_id,
                    estado : req.body.estado,
                    fecha : req.body.fecha,
                    hora : req.body.hora
                })

                res.status(201).send(updatedEncomienda);
            }
            else{
                res.status(404).send("Encomienda Not Found");
            }

        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    }
}