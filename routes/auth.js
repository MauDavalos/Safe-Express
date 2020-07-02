const Router = require('express');
const createUser = require('../controllers/auth-controller');
const checkIfAuthenticated = require('../middlewares/auth-middleware');

const router = Router();


router.post('/auth/signup', createUser);

router.get('/', checkIfAuthenticated, async (_, res) => {
  console.log('fsdfs');
});

module.exports = router;