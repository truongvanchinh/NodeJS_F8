const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

const port = 3000;
const app = express();

//static
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// override HTTP POST -> PUT in edit
app.use(methodOverride('_method'));


// HTTP logger
// app.use(morgan('combined'))

// DB connect
db.connect();

// Template engine
app.engine(
    'hbs',
    handlebars.engine({ 
        defaultLayout: 'main', 
        extname: '.hbs',
        helpers: {
            sum(a,b) { return a+b; },
        }
     }),

);
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources','views'));

// Routes init
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
