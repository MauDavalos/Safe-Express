const Direccion = require('../models').Direccion;
const Encomienda = require('../models').Encomienda;
const Origen = require('../models').Origen;
const Destino = require('../models').Destino;

module.exports = {

    /*getCitasMedicas: async (req: Request, res: Response): Promise<Response> => {
        const encomiendaId = req.params.id
        const origenes
        const citas = await Cliente.findAll({
          attributes: ['id_cliente', 'nombre'],
          where: { id_usuario: id_usuario },
          include: {
            model: CitaMedica
          },
          order:[
            [CitaMedica, 'id_cita', 'DESC'],
          ]
          
        })
        if (citas.length > 0) {
          return res.send(citas)
        } else {
          return res.send(JSON.stringify({ error: "no se encontraron citas" }));
        }
      },

      getCitasMedicas: async (req: Request, res: Response): Promise<Response> => {
        const id_usuario = req.params.id
        const citas = await Cliente.findAll({
          attributes: ['id_cliente', 'nombre'],
          where: { id_usuario: id_usuario },
          include: {
            model: CitaMedica
          },
          order:[
            [CitaMedica, 'id_cita', 'DESC'],
          ]
          
        })
        if (citas.length > 0) {
          return res.send(citas)
        } else {
          return res.send(JSON.stringify({ error: "no se encontraron citas" }));
        }
      }*/
    
    
    

  

        async getAllDataOfEncomienda(req,res) {
        try {
            const encomiendaCollection = await Encomienda.find({
                id : req.params.encomiendaId
            });

            if(encomiendaCollection){
                const dataCollection = await Origen.find({
                    encomiendaId : req.params.encomiendaId
                })
                // justo aqui creo que le puedes anidar mas consultas, segun le habia revisado la documentacion
                //entonces aqui le deberias anidar a las otras tablas que necesitas para la consulta
                //no se porque no recomienda las opciones jaja, si sabe recomendar :v
                //dejame recordar populateo algo asi es para combinar con otras tablas
                //bueno, como sea, buscale la manera de hacer eso porque si hay como, dejame ver que sicreo que le tengo guardado en mi navegador
                //como se llama lo que estas utilizando?? sequelize
                //sep populate mismo es la opcion/
                // buscale con populate mija 
                res.status(201).send(dataCollection);
            }
            else{
                re.status(404).send("Data Not Found")
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