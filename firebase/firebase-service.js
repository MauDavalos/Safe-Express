const admin = require("firebase-admin");

const serviceAccount = require("../firebase/firebase-service-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://safe-express-auth.firebaseio.com"
});

module.exports = admin