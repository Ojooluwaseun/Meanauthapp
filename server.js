import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';

import config from './config/database'
import users from './routes/users';
var port = process.env.BACKEND_PORT || process.env.PORT || 3000;

//database connection
//mongoose.connect(config.db.uri);

const encodedPassword = encodeURIComponent('E2svUHaKTeOJatSK8FUJ0EOPOcI0Mf14j3o1ll0oz69JpNCNMXWvrWQjRUshzqBVxl7PaPMIqI5v5YvPD4ahAg==');
mongoose.connect(`mongodb://meanauth-app:${encodedPassword}@meanauth-app.documents.azure.com:10255/?ssl=true&replicaSet=globaldb`);

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database')
})

//On Error 
mongoose.connection.on('error', (err) => {
    console.log('Connection error: '+err)
})

const app = express();

app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', users);

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

app.listen(port, () => console.log('Express server running on port ' + port));