
const myPromise = (isTrue) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isTrue){
            resolve('¡Promise completed!');
        }else{
            reject('¡Promise fail!');
        }
    },1500)
})

/* myPromise(false)
    .then((value) => {console.log(value)})
    .catch((reason) => {console.log(reason)}) */

const handleResolve = (value) => {
    console.log(value)
}
const handleReject = (reason) => {
    console.log(reason)
}
myPromise(false).then(handleResolve, handleReject);
