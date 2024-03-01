/* const course = require('./course.json');
console.log(course); */

const courseInfo = {
    "title": "Learn Node",
    "views": 45671,
    "likes": 345676,
    "about": [
        "JavaScript",
        "Node JS",
        "Express"
    ],
    "isPublic": true
}
/* console.log(courseInfo); */
/* console.log(typeof courseInfo); */

const courseInfoJSON = JSON.stringify(courseInfo);
/* console.log(courseInfoJSON); */
/* console.log(typeof courseInfoJSON); */

const courseInfoObj = JSON.parse(courseInfoJSON);
/* console.log(courseInfoObj); */
/* console.log(typeof courseInfoObj) */