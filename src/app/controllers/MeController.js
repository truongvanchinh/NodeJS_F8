const Course = require('../models/Course');
const { multipleMongooseToObject } =  require('../../util/mongoose');

class MeController {
    
    //[GET] /me/stored/courses
    async storedCourses(req,res,next){

        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({deleted: true})])
            .then(([courses, deletdCount])=>{
                res.render('me/stored-courses', {
                    deletdCount,
                    courses : multipleMongooseToObject(courses)});
            })
            .catch(next);
        
    }

    //[GET] /me/trash/courses
    async trashCourses(req,res,next){
        await Course.findWithDeleted({deleted: true})
            .then(courses => {
                res.render('me/trash-courses', {courses : multipleMongooseToObject(courses)});
            })
            .catch(next);
        
    }
}

module.exports = new MeController();