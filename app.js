const express = require('express');
const path = require('path');

// Routes
const indexRoute = require('./routes/index');
//const usersRoute = require('./routes/users');
//const courseRoute = require('./routes/course');

const app = express();
app.set('views', path.join(__dirname, 'views'))
// Routes App
app.use('/',indexRoute);
//app.use('/users', usersRoute);
//app.use('/course', courseRoute);

module.exports = app;