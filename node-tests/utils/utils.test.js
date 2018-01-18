const expect = require('expect')

const utils = require('./utils')


it('Should add two numbers', () => {
  
  const res = utils.add(33,11)
  
  expect(res).toBe(44).toBeA('number')
})

it('Should square a number', () => {
  const res = utils.square(8)
  
  expect(res).toBe(64).toBeA('number')
})

/*it('Should expect some values', () => {
  // expect(12).toNotBe(11)
  // expect({name: 'brandon'}).toNotEqual({name: 'Brandon'})
  // expect([2,3,4]).toInclude(3)
  // expect([2,3,4]).toNotInclude(1)
  expect({
    name: 'Brandon',
    age: 32,
    location: 'Scottsdale'
  }).toInclude({
    age: 32
  })
})*/

//Should verify first and last names are set
it('Should set first and last name', () => {
  const user = {
   age: 32,
   location: 'Scottsdale'
  }
  
  const res = utils.setName(user, 'Brandon Smith')
  
  expect(res).toInclude({firstName: 'Brandon'}).toBeA('object')
  expect(res).toInclude({lastName: 'Smith'}).toBeA('object')
})