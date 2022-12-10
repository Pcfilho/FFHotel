
var admin = require("firebase-admin");

var serviceAccount = require("../ffhotel-b34e1-firebase-adminsdk-m2iok-ce285c36ee.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };