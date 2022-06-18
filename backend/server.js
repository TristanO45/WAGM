const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
// const apiRouter = require('./routes/api')

const bodyParser = require('express').json

const app = express();

const mongoURI = process.env.mongoURI
mongoose.connect(mongoURI)
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database...'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Handlers
// app.use('/api', apiRouter)

// statically serve everything in the build folder on the route build
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on '/' route
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
});

// signup

app.get('/signup', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, ))
});

app.post('/signup', (err, req, res, next) => {
    // res.redirect()
})

// login

app.post('/login', (req, res) => {
    // res.redirect()
})



app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));