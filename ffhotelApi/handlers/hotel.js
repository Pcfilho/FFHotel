const { db } = require("../util/admin");

exports.getHotel = async (req, res) => {
    const hotelRef = db.collection('hotel');
    try{
        hotelRef.get().then((snapshot) => {
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

exports.getHotelById = async (req, res) => {
    try {
      const hotelRef = db.collection("hotel").doc(req.params.id);
      const response = await hotelRef.get();
      res.send(response.data());
    } catch(error) {
      res.send(error);
    }
}

exports.createHotel = async (req, res) => {
    console.log('createHotel', req.body);
    try {
      const id = req.body.id;
      const hotelJson = {
        name: req.body.name,
        estado: req.body.estado,
        cidade: req.body.cidade
      };
      const hotelDb = db.collection('hotel'); 
      const response = await hotelDb.doc(id).set(hotelJson);
      res.send(response);
    } catch(error) {
      res.send(error);
    }
  }


exports.updateHotel = async(req, res) => {
    console.log('updateHotel', req.body);
    try {
        const id = req.body.id;
        const newName = req.body.name;
        const newCidade = req.body.cidade;
        const newEstado = req.body.estado;

        if (newName && newEstado && newCidade) {
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                name: newName,
                estado: newEstado,
                cidade: newCidade,
            });
            return res.send(hotelRef);
        } else if (newName && newEstado) {
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                name: newName,
                estado: newEstado,
            });
            return res.send(hotelRef);
        } else if (newName && newCidade) {
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                name: newName,
                cidade: newCidade,
            });
            return res.send(hotelRef);
        } else if (newEstado && newCidade) {
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                estado: newEstado,
                cidade: newCidade,
            });
            return res.send(hotelRef);
        } else if (newName) {
            console.log("nome" + newName);
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                name: newName,
            });
            return res.send(hotelRef);
        } else if (newEstado) {
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                estado: newEstado,
            });
            return res.send(hotelRef);
        }else if (newCidade) {
            const hotelRef = await db.collection("hotel").doc(id)
            .update({
                cidade: newCidade,
            });
            return res.send(hotelRef); 
        }
            else {
            throw new Error("Nenhum valor para atualizar");
        }
    } catch(error) {
        res.send(error);
    }
}

exports.deleteHotel = async (req, res) => {
    try {
      const response = await db.collection("hotel").doc(req.body.id).delete();
      res.send(response);
    } catch(error) {
      res.send(error);
    }

};