const express = require('express');
const {programming} = require('../data/courses.js').infoCourses;

const routerProgramming = express.Router();

routerProgramming.get('/', (req, res) => {
    //query
    if(req.query.orderBy === 'views') {
        return res.send(JSON.stringify(programming.sort((a, b) => b.views - a.views)))
    }

    return res.send(JSON.stringify(programming));
})

routerProgramming.get('/:about', (req, res) => {
    const about = req.params.about;
    const coursesFiltered = programming.filter((course) => course.about === about);

    if(coursesFiltered.length === 0) {
        return res.status(204).end();
    }

    return res.send(JSON.stringify(coursesFiltered));
});

/////////////////////////////////////////////////////

//middleware
routerProgramming.use(express.json());



routerProgramming.post('/', (req, res) => {
    const requirePost = req.body;

    programming.push(requirePost);
    res.json(programming);
});

routerProgramming.put('/:id', (req, res) => {
    const courseUpdate = req.body;
    const id = req.params.id;
    const index = programming.findIndex((course) => course.id == id);

    if(index >= 0) {
        programming[index] = courseUpdate;
    }

    res.json(programming);
});

routerProgramming.patch('/:id', (req, res) => {
    const courseUpdate = req.body;
    const id = req.params.id;
    const index = programming.findIndex((course) => course.id == id);

    if(index >= 0) {
        course = programming[index];
        Object.assign(course, courseUpdate);
    }

    res.json(programming);
});

routerProgramming.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = programming.findIndex((course) => course.id == id);

    if(index >= 0) {
        programming.splice(index, 1);
    }

    res.json(programming);
});



module.exports.routerProgramming = routerProgramming;