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
mongoose.connect(config.db.uri);

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.db.uri)
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