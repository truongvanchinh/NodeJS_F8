const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');

const route = require('./routes');

const port = 3000
const app = express()

//static 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs',  handlebars.engine({ defaultLayout: 'main', extname:".hbs" }));
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`))