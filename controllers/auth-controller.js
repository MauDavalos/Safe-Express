const admin = require('../firebase/firebase-service');

const createUser = async (req, res) => {
  const {
    email,
    password,
    nombres,
    apellidos,
    username
  } = req.body;

    const user = await admin.auth().createUser({
      email,
        password,
        nombres,
        apellidos,
        username
        
      });

    return res.send(user);
}

module.exports = createUser;

