const Course = require('../models/Course');
const { mongooseToObject } =  require('../../util/mongoose');

class CourseController {
    
    //[GET] /courses/:slug
    async show(req, res, next) {
        await Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show',{course: mongooseToObject(course)})
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req,res,next){
        res.render('courses/create')
    }

    //[POST] /course/store
    async store(req,res,next){
        const formData = {...req.body};
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        await Course.create(formData)   
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[GET] /courses/:id/edit
    async edit(req,res,next){
        await Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit',{course: mongooseToObject(course)})
            })
            .catch(next);
        // res.json(req.params.id)
    }

    //[PUT] /courses/:id
    async update(req,res,next){
        awaitCourse.updateOne({_id: req.params.id}, req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id
    async delete(req, res, next) {
        await Course.delete({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /courses/:id/force
    async forceDelete(req, res, next) {
        await Course.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }
    

    //[PATCH] /courses/:id/restore
    async restore(req, res, next) {
        await Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[POST] /courses/handle-form-actions
    async handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                await Course.delete({_id: {$in: req.body.courseIds}})
                    .then(()=> res.redirect('back'))
                    .catch(next);
                break;

            case 'restore':
                await Course.restore({_id: {$in: req.body.courseIds}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                    break;

            case 'destroy':
                await Course.deleteMany({_id: {$in: req.body.courseIds}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                    break;
            default:
                res.json({message: 'Action in valid!!!'});
        }
        
    }
}

module.exports = new CourseController();