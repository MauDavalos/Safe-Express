const admin = require('../firebase/firebase-service');

const createUser = async (req, res) => {
  const {
    email,
    password
  } = req.body;

    const user = await admin.auth().createUser({
      email,
        password
        
      });

    return res.send(user);
}

module.exports = createUser;

