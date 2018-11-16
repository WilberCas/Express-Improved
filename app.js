const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// Connection values
const server = "localhost:32768";

// Connection string 
const connStr = `mongodb://${server}/courses`
// Models
//const Course = require('./model/Course');
// Routes
const indexRoute = require('./routes/index');
const courseRoute = require('./routes/course');

// Configure database
mongoose.Promise = global.Promise;
mongoose.connect(connStr, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('Connection Success'))
.then(() => console.error('Not Connected'));

const app = express();
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'views')));
// Routes App
app.use('/',indexRoute);
//app.use('/users', usersRoute);
app.use('/course', courseRoute);

module.exports = app;