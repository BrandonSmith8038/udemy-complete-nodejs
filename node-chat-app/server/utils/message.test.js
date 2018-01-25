const expect = require('expect')
const  {generateMessage} = require('./message')
const  {generateLocationMessage} = require('./message')


describe('generateMessage', () => {

  it('Should Generate Correct Message Object', () => {
    
    const from = 'Admin'
    const text = 'Test Message'
    
    const message = generateMessage(from, text)
  
    expect(message.from).toBe(from)
    expect(message.text).toBe(text)
    expect(message.createdAt).toBeA('number')
    
  })
})

describe('generateLocationMessage', () => {
  it('Should Generate Correct Message Object', () => {
    
    const from = 'Admin'
    const lat = 15
    const long = 19
    const url = `https://google.com/maps/?q=${lat},${long}`
    
    const message = generateLocationMessage(from, lat, long)
    
    expect(message.from).toBe(from)
    expect(message.url).toBe(url)
    expect(message.createdAt).toBeA('number')
  })
})