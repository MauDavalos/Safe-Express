const userController = require('../controller').user;
const postController = require('../controller').post;
const clienteController = require('../controller').cliente;
const choferController = require('../controller').chofer;
const encomiendaController = require('../controller').encomienda;
const origenController = require('../controller').origen;
const destinoController = require('../controller').destino;
const models = require('../models');
const direccion = require('../controller/direccion');

const direccionObj = require('../models').Direccion;
const origenObj = require('../models').Origen;

const direccionController = require('../controller').direccion;

const testController = require('../controller').test;

module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Safe EXpress Sequlize API v1 by Mauricio Davalos"
        })
    })

    app.get('/api/users',userController.getAllUsers);

    app.post('/api/user/create',userController.create);

    app.put('/api/user/:userId',userController.update);

    app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    app.post('/api/post/create',postController.createPost);

    app.put('/api/post/:postId',postController.update);

    //////////////////////

    app.get('/api/clientes',clienteController.getAllClientes);

    app.post('/api/cliente/create',clienteController.create);

    app.put('/api/cliente/:clienteId',clienteController.update);

    app.get('/api/choferes',choferController.getAllChoferes);

    app.post('/api/chofer/create',choferController.create);

    app.put('/api/chofer/:choferId',choferController.update);

    /////////////////////////////

    app.get('/api/:clienteId/encomiendasCliente',encomiendaController.getAllEncomiendasOfCliente);

    app.get('/api/:choferId/encomiendasChofer',encomiendaController.getAllEncomiendasOfChofer);

    app.post('/api/encomienda/create',encomiendaController.createEncomienda);

    app.put('/api/encomienda/:encomiendaId',encomiendaController.update);

    //////////////////////

    app.get('/api/origenes',origenController.getAllOrigenes);

    app.post('/api/origen/create',origenController.create);

    app.put('/api/origen/:origenId',origenController.update);

    app.get('/api/destinos',destinoController.getAllDestinos);

    app.post('/api/destino/create',destinoController.create);

    app.put('/api/destino/:destinoId',destinoController.update);

    ////////////////////////////

    app.get('/api/:encomiendaId/dataEncomienda',direccionController.getAllDataOfEncomienda);

    /////////////////

    app.get('/data', (req, res) => {
        models.Direccion.findAll({
          include: [
            {
              model: models.Origen
            }
          ]
        }).then(Direccion => {
          const resObj = Direccion.map(Direccion => {
    
            //tidy up the user data
            return Object.assign(
              {},
              {
                direccion_id: Direccion.id,
                
                origen: Direccion.Origen.map(Origen => {
    
                  //tidy up the post data
                  return Object.assign(
                    {},
                    {
                      origen_id: Origen.id,
                      calle_secundaria: Origen.calle_secundaria
                    }
                    )
                })
              }
            )
          });
          res.json(resObj)
        });
      });

    /////////////

    app.get("/chofer/:choferId", (req,res) => {
      console.log("Devolviendo paciente con id: " + req.params.id)
      const choferId = req.params.id
      const queryString = "select * from Chofers where id = ?"
       mysqlConnection.query(queryString, [choferId], (err, rows, fields) => {
          res.json(rows[0])
      })
      //res.end()
  })

  ////////////////

  app.get('/api/test/',testController.getData);





}