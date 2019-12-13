const express = require('express');
const router = express.Router();

// Defining Courses
let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' }
];

// EndPoints
router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    let course = courses.find(x => x.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id not found :(');

    res.send(course);
});

router.post('/', (req, res) => {
    const { error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const newCourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(newCourse);
    res.send(newCourse);
});

router.put('/:id', (req, res) => {
    let course = courses.find(x => x.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id not found :(');
    
    const { error } = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

router.delete('/:id', (req, res) => {
    let course = courses.find(x => x.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id not found :(');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

// Functions
function validateCourse(course){
    const scheme = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, scheme);
}

module.exports = router;