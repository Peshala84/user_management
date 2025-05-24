const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dbuser:Peshala84@cluster0.jrvxwrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try{
             await mongoose.connect(uri)
             console.log('Connceted to mongodb')
    }
    catch(error) {
        console.log('mongodb error : ' , error)
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node Server is listening on http://${host}:${port}`);
});

app.use('/api', router);