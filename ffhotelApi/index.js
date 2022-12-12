var express = require('express');
var app = express();
app.use(express.json());
const PORT = 5050
const { getUsers, createUser, getUserById, updateUser, deleteUser } = require('./handlers/users')
const { getHotel, createHotel, getHotelById, updateHotel, deleteHotel } = require('./handlers/hotel')

app.get('/users', getUsers);

app.get('/user/:id', getUserById);

app.post('/newuser', createUser);

app.put('/user', updateUser);

app.delete('/user', deleteUser);

app.get('/hotel', getHotel);

app.get('/hotel/:id', getHotelById);

app.post('/newhotel', createHotel);

app.put('/hotel', updateHotel);

app.delete('/hotel', deleteHotel);

app.listen(PORT, function () {
    console.log(`FFHotel at: ${PORT}!`); 
});

