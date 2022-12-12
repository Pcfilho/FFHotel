const { db } = require("../util/admin");

exports.getReserva = async (req, res) => {
    const reservaRef = db.collection('reserva');
    try{
        reservaRef.get().then((snapshot) => {
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

exports.getReservaById = async (req, res) => {
    try {
      const reservaRef = db.collection("reserva").doc(req.params.id);
      const response = await reservaRef.get();
      res.send(response.data());
    } catch(error) {
      res.send(error);
    }
}

exports.createReserva = async (req, res) => {
    console.log('createReserva', req.body);
    try {
      const id = req.body.id;
      const reservaJson = {
        horario: req.body.horario,
        hotelId: req.body.hotelId,
        noites: req.body.noites,
        preco: req.body.preco,
        userId: req.body.userId,
      };
      const reservaDb = db.collection('reserva'); 
      const response = await reservaDb.doc(id).set(reservaJson);
      res.send(response);
    } catch(error) {
      res.send(error);
    }
  }


exports.updateReserva = async(req, res) => {

    console.log('updateReserva', req.body);
    try {
        const id = req.body.id;
        const newHorario = req.body.horario;
        const newHotelId = req.body.hotelId;
        const newNoites = req.body.noites;
        const newPreco = req.body.preco;
        const newUser = req.body.userId;

        const reservaRef = await db.collection("reserva").doc(id)
        .update({
            horario: newHorario,
            hotelId: newHotelId,
            noites: newNoites,
            preco: newPreco,
            userId: newUser
        });
        return res.send(reservaRef);
          
        
    } catch(error) {
        res.send(error);
    }
}

exports.deleteReserva = async (req, res) => {
    try {
      const response = await db.collection("reserva").doc(req.body.id).delete();
      res.send(response);
    } catch(error) {
      res.send(error);
    }

};