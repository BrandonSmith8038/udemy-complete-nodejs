const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments Must Numbers');
      }
    }, 1500);
  });
};

/*const somePromise =  new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey, It worked')
    reject('Unable to fullfill promise')
  }, 2500)
  
})

somePromise.then((message) => {
  console.log('Success:', message)
}, (err) => {
  console.log('Err: ', err)
})*/

asyncAdd(5, 7)
  .then(result => {
    console.log('Result: ', result);
    return asyncAdd(result, 33);
  })
  .then(res => {
    console.log('Should Be 45: ', res);
  })
  .catch(err => console.log(err));
