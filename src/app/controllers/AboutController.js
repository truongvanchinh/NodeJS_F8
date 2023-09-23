class AboutController {

    // [GET] /about
    index(req, res) {
        res.render('about');
    }

    //[GET] /about/:slug
    show(req, res) {
        res.send('about-detail')
    }
}

module.exports = new AboutController;