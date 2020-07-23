const userController = require('../controller').user;
const postController = require('../controller').post;
const clienteController = require('../controller').cliente;
const choferController = require('../controller').chofer;
const encomiendaController = require('../controller').encomienda;

module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Safe EXpress Sequlize API v1"
        })
    })

    app.get('/api/users',userController.getAllUsers);

    app.post('/api/user/create',userController.create);

    app.put('/api/user/:userId',userController.update);

    app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    app.post('/api/post/create',postController.createPost);

    app.put('/api/:postId',postController.update);

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

    app.put('/api/:encomiendaId',encomiendaController.update);

    //////////////////////




}