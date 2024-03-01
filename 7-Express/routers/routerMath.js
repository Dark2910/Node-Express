const express = require('express');
const {math} = require('../data/courses.js').infoCourses;

const routerMath = express.Router();

routerMath.get('/', (req, res) => {
    if(req.query.orderBy === 'views'){
        return res.send(JSON.stringify(math.sort((a, b) => b.views - a.views)))
    }
    
    return res.send(JSON.stringify(math));
});

routerMath.get('/:about',(req, res) => {
    const about = req.params.about;
    const coursesFiltered = math.filter((courses) => courses.about === about);

    if(coursesFiltered.length === 0) {
        return res.status(404).send('Course not fount. 😥');
    }

    return res.send(JSON.stringify(coursesFiltered));
});

/////////////////////////////////////////////////////

//middleware
routerMath.use(express.json());



routerMath.post('/', (req, res) => {
    let requestPost = req.body;

    math.push(requestBody);
    res.json(math);
    //res.send(JSON.stringify(math));
});


routerMath.put('/:id', (req, res) => {
    const courseUpdated = req.body;
    const id = req.params.id;

    const index = math.findIndex((course) => course.id == id);

    if(index >= 0) {
        math[index] = courseUpdated;
    }

    console.log(math);
    res.json(math);
    //res.send(JSON.stringify(math));
});

routerMath.patch('/:id', (req, res) => {
    const courseUpdated = req.body;
    const id = req.params.id;

    const index = math.findIndex((course) => course.id == id);

    if(index >= 0) {
        const course = math[index];
        Object.assign(course, courseUpdated);
    }

    console.log(math);
    res.json(math);
    //res.send(JSON.stringify(math));
});

routerMath.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = math.findIndex((course) => course.id == id);

    if(index >= 0) {
        math.splice(index, 1);
    }

    console.log(math);
    res.json(math);
    //res.send(JSON.stringify(math));
});





module.exports = routerMath;