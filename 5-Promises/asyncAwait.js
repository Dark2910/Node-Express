
const orderProduct = (product) => new Promise((resolve, reject) => {
    setTimeout(() => {
        product === 'cup'? resolve(`Ordering ${product}`) : reject(`${product} unavailable`)
    },6000);
});

const processingOrder = (answer) => new Promise((resolve) => {
    console.log('Processing order...');
    /* console.log(`${answer}`); */
    setTimeout(() => {
        resolve(`Thanks!!! Enjoy your cup of coffee`)
    },4000)
})

/* orderProduct('cup')
    .then((value) => {
        console.log('We get an answer');
        return processingOrder(value);
    })
    .then((newAnswer => {
        console.log(newAnswer);
    }))
    .catch((err) => {
        console.log(err);
    }) */

const makeOrder = async (product) => {
    try {
        const answer = await orderProduct(product);
        console.log('answer received');
        console.log(answer);
        const answerProcessed = await processingOrder(answer);
        console.log(answerProcessed);

    } catch (error) {
        console.warn(error);
    }
}

makeOrder('pencil')