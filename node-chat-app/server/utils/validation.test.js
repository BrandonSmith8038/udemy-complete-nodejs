const expect = require('expect')
const {isRealString} = require('./validation')


describe('isRealString', () => {
  it('Should Reject Non String Values', () => {
    expect(isRealString(3434)).toBe(false)
  }) 
  it('Should reject string with only spaces', () => {
    expect(isRealString('    ')).toBe(false)
  })
  it('Should accept string with non-space characters', () => {
    expect(isRealString('Hello')).toBe(true)
  })
  
})