const expect = require('expect')
const  {generateMessage} = require('./message')


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