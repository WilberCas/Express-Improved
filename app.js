const express = require('express');

// Routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const courseRoute = require('./routes/course');

const app = express();

// Routes App
app.use('/',indexRoute);
app.use('/users', usersRoute);
app.use('/course', courseRoute);

