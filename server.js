const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');

const register = require('./Controller/register');
const signin = require('./Controller/signin');
const profile = require('./Controller/profile');
const image = require('./Controller/image');


const db = knex({
  client: 'pg',
  connection: {
    connectionString: 'process.env.DATABASE_URL',
    ssl: true
  }
});

db.select().from('users').then(data => {
    console.log(data);
});



const app = express();

//Body Parser has been used.
//cors has been used.
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => { res.send('it is working') })

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('............App is running on Port: ${port}');
});