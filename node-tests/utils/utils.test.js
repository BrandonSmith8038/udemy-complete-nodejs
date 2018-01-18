const utils = require('./utils')

it('Should add two numbers', () => {
  
  const res = utils.add(33,11)
  
  if(res !== 44){
    throw new Error(`Expected 44, but got ${res}`)
  }
})

it('Should square a number', () => {
  const res = utils.square(8)
  
  if(res !== 64){
    throw new Error(`Expected 64 but got ${res}`)
  }
})