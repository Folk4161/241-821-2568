const express = require("express");
const app = express();

const PORT = 8000;
app.use(express.json());


let users = [];
app.get('/users', (req, res) => {
   
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json({
        message: 'User data received successfully',
        user: user
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});