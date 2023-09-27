const aboutRouter = require('./about');
const siteRouter = require('./site');
const courseRouter = require('./courses')
const meRouter = require('./me')


function route(app) {
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/about', aboutRouter);
    app.use('/', siteRouter);
}

module.exports = route;
