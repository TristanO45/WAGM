const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
// const apiRouter = require('./routes/api')

const app = express();

// Route Handlers
// app.use('/api', apiRouter)

// statically serve everything in the build folder on the route build
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on '/' route
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));