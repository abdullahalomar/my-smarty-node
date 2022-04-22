const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my own over smarty pant!!')
})

const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '017878888989'},
    {id: 2, name: 'halima', email: 'halima@gmail.com', phone: '017888800989'},
    {id: 3, name: 'bobita', email: 'bobita@gmail.com', phone: '017888845989'},
    {id: 4, name: 'kulsum', email: 'kulsum@gmail.com', phone: '0178888458989'},
    {id: 5, name: 'falguni', email: 'falguni@gmail.com', phone: '0178834588989'},
    {id: 6, name: 'moyna', email: 'moyna@gmail.com', phone: '0178884895689'},
]

app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = user.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
})