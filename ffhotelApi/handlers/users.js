const { db } = require("../util/admin");

exports.getUsers = async (req, res) => {
    const usersRef = db.collection('users');
    try{
        usersRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

exports.getUserById = async (req, res) => {
    try {
      const userRef = db.collection("users").doc(req.params.id);
      const response = await userRef.get();
      res.send(response.data());
    } catch(error) {
      res.send(error);
    }
}

exports.createUser = async (req, res) => {
    console.log('createUser', req.body);
    try {
      const id = req.body.id;
      const userJson = {
        name: req.body.name,
        email: req.body.email,
      };
      const usersDb = db.collection('users'); 
      const response = await usersDb.doc(id).set(userJson);
      res.send(response);
    } catch(error) {
      res.send(error);
    }
  }


exports.updateUser = async(req, res) => {
    console.log('updateUser', req.body);
    try {
        const id = req.body.id;
        const newName = req.body.name;
        const newEmail = req.body.email;

        if (newName && newEmail) {
            console.log("nome e email" + newName + newEmail);
            const userRef = await db.collection("users").doc(id)
            .update({
                name: newName,
                email: newEmail
            });
            return res.send(userRef);
        } else if (newName) {
            console.log("nome" + newName);
            const userRef = await db.collection("users").doc(id)
            .update({
                name: newName,
            });
            return res.send(userRef);
        } else if (newEmail) {
            console.log("email" + newEmail);
            const userRef = await db.collection("users").doc(id)
            .update({
                email: newEmail,
            });
            return res.send(userRef);
        } else {
            throw new Error("Nenhum valor para atualizar");
        }
    } catch(error) {
        res.send(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
      const response = await db.collection("users").doc(req.body.id).delete();
      res.send(response);
    } catch(error) {
      res.send(error);
    }

};