const express = require('express');
const {infoCourses} = require('./data/courses.js');

const app = express();

//Router

const {routerProgramming} = require('./routers/routerProgramming.js');
app.use('/api/courses/programming', routerProgramming);

const routerMath = require('./routers/routerMath.js');
app.use('/api/courses/math', routerMath)

const myRouter = express.Router();
app.use('/api/courses', myRouter)


//Routing

app.get('/', (req, res) => {
    return res.send('My first server. 💻');
});

myRouter.get('/', (req, res) => {
    return res.send(JSON.stringify(infoCourses));
});

//////////////////////////////////////

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} Server listening...`);
});


/* myRouter.get('/:courseField', (req, res) => {
    const courseField = req.params.courseField;
    const courses = infoCourses[courseField];

    if(!courses) {
        return res.status(404).send('Course not fount. 😥');
    }

    return res.send(JSON.stringify(courses));
}); */

/* myRouter.get('/:courseField/:about', (req, res) => {
    const courseField = req.params.courseField;
    const about = req.params.about;

    const courses = infoCourses[courseField];
    const coursesFiltered = courses.filter((course) => course.about === about);

    if(!courses || coursesFiltered.length === 0) {
        return res.status(404).send('Course not fount. 😥');
    }

    if(req.query.orderBy === 'a') {
        return res.send(JSON.stringify(coursesFiltered.sort((a, b) => b.views - a.views)))
    }

    return res.send(JSON.stringify(coursesFiltered))
}); */