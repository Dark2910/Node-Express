const hello = (name) => {
    return `Hello ${name}. :D`
}
const helloWorld = (name) => {
    return 'Hello World!!!';
}

/* module.exports.hello = hello;
module.exports.helloWorld = helloWorld; */

module.exports = {
    hello: hello,
    helloWorld: helloWorld,
}
