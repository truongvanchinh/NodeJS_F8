const Course = require('../models/Course');
const { multipleMongooesToObject } =  require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        
        Course.find({})
            .then(courses => {
                res.render('home',{courses: multipleMongooesToObject(courses)});
            })
            .catch(next);


        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
