//#region Imports

const config = require('config');

// ** Joi Validator
const Joi = require('joi');

// ** Middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middleware/logger');

// ** Routers
const home = require('./routes/home')
const courses = require('./routes/courses')

// ** Express
const express = require('express');
const app = express();

//#endregion


//#region Usings

app.use(express.json());
app.use(express.static('public'));
app.use(helmet());

// Middlewares
app.use(logger.log);

// Routers
app.use('/', home);
app.use('/api/courses', courses);

//#endregion

// Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);

if(app.get('env') === 'development') app.use(morgan('tiny'));

// This EndPoint Is for Test
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
    //res.send(req.query);
});

// Setting The Port Value
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port} ...`);
});

