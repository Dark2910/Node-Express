const orderStatus = () => {
    return Math.random() < 0.8;
};

const handleOrder = (confirmationMessage) => {
    console.log(confirmationMessage);
}

const rejectOrder = (errorMessage) => {
    console.log(errorMessage);
}

const myOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(orderStatus()){
            resolve('Order successfully!');
        }else{
            reject('Order error!');
        }
    },1500)
});

/* myOrder.then(handleOrder, rejectOrder); */

myOrder
    .then(handleOrder)
    .catch(rejectOrder)