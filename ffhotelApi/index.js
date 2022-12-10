var express = require('express');
var app = express();
app.use(express.json());
const PORT = process.env.PORT || 5050
const { getUsers, createUser, getUserById, updateUser, deleteUser } = require('./handlers/users')


app.get('/users', getUsers);

app.get('/user/:id', getUserById);

app.post('/newuser', createUser);

app.put('/user', updateUser);

app.delete('/user', deleteUser);

app.listen(PORT, function () {
    console.log(`FFHotel at: ${PORT}!`); 
});

