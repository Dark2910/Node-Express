const express = require('express');
const {programming} = require('../data/courses.js').infoCourses;

const routerProgramming = express.Router();

routerProgramming.get('/', (req, res) => {
    if(req.query.orderBy === 'views') {
        return res.send(JSON.stringify(programming.sort((a, b) => b.views - a.views)))
    }

    return res.send(JSON.stringify(programming));
})

routerProgramming.get('/:about', (req, res) => {
    const about = req.params.about;
    const coursesFiltered = programming.filter((course) => course.about === about);

    if(coursesFiltered.length === 0) {
        return res.status(404).send('Course not fount. 😥');
    }

    return res.send(JSON.stringify(coursesFiltered));
});

module.exports.routerProgramming = routerProgramming;