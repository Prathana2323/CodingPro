const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const { MongoClient } = require('mongodb');

app.use(bodyParser.json());

// Simulated user data
const users = [
    { username: 'admin', password: 'admin123' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.get('/api/users',(req,res)=>{
    res.json([
        {
            id:1,
            username:'prarthana'
        },
    {
        id:1,
        username:'steve'
    }
    ])
})
     

app.use(bodyParser.json());

const uri ='mongodb+srv://prarthana232323:mongodb12345@cluster0.dng54kn.mongodb.net?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
//}


MongoClient.connect(uri,(err,client)=>{
    if(err){
        throw err;
    }
    console.log('conneted to database')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});