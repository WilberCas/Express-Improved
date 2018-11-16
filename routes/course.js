const express = require('express');
const router = express.Router();
let CourseModel = require('../model/course');
// Getting all courses
router.get('/', (req, res) => {
    CourseModel.find({}, (err, courses) =>{
        if(err){
            res.status(500);
            res.json({
                status: 500,
                err: err
            });
        }
        else{
            res.json(courses);
        }
    })
});

// Getting a specific course
router.get('/:name', (req, res) => {
    if(req.params.name){
        CourseModel.findOne({name: req.params.name}, (err, course) =>{
            if(err){
                res.status(500);
                res.json({
                    status: 500,
                    err: err
                });
            }
            else{
                res.json(course);
            }
        })
    }
    else{
        res.status(400);
        res.json({
            status: 400,
            err: 'Bad Request'
        })
    }
});

// Adding a new couse
router.post('/', (req, res) => {
    let newCourse = new CourseModel({
        name: req.body.name
    })
    newCourse.save((err) =>{
        if (err) {
            res.status(500)
            res.send({
                err
            });
        }
        res.send({
            message: "saved",
            success: true
        });
    })
});

// Delete a course
router.delete('/:id', (req, res) =>{
    if (req.params.id) {
        CourseModel.findByIdAndRemove(req.params.id, (err, materia) => {
            if (err) {
                res.status(500);
                res.json({
                    status: 500,
                    success: false,
                    err
                });
            } else {
                res.json({
                    success: true,
                    delete: materia
                });
            }
        });

    } else {

        res.status(400);
        res.json({
            status: 400,
            success: false
        });
    }
});

// Update a course
router.put('/:id', (req, res) =>{
    if (req.params.id) {
        CourseModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
            },
            (err, materia) => {
                res.json({err, materia});
            });
    } else {
        res.status(400);
        res.json({
            status: 400,
            success: false
        });
    }
});

module.exports = router;