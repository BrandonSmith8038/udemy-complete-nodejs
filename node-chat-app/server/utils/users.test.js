const expect = require('expect')
const {Users} = require('./users')

describe('Users', () => {
  let users = ''
  
  beforeEach(() => {
    user = new Users()
    users.users = [{
      id: '1',
      name: 'Brandon',
      room: 'Room 1'
    },{
      id: '2',
      name: 'Amber',
      room: 'Room 2'
    },{
      id: '3',
      name: 'Chris',
      room: 'Room 1'
    }]
  })
  
  it('Should add new users', () => {
    users = new Users()
    const user = {
      id: '123',
      name: 'Brandon',
      room: 'Room 1'
    }
    
    const resUser = users.addUser(user.id, user.name, user.room)
    
    expect(users.users).toEqual([user])
    
  })
  
  it('Should return names for room 1', () => {
    const userList = users.getUserList('Room 1');
    
    expect(userList).toEqual(['Brandon', 'Chris'])
  })
  
  it('Should return names for room 2', () => {
    const userList = users.getUserList('Room 2');
    
    expect(userList).toEqual(['Amber'])
  })
  
  it('Should remove a user', () => {
    const userId = '2'
    const user = users.removeUser(userId)
    
    expect(user.id).toBe(userId)
    expect(users.users.length).toBe(2)
  })
  
  it('Should not return a user', () => {
    const userId = '99'
    const user = users.removeUser(userId)
    
    expect(user).toNotExist()
    expect(users.users.length).toBe(3)
  })
  
  it('Should find user', () => {
    const userId = '2'
    const user = users.getUser(userId)
    
    expect(user.id).toBe(userId)
  })
  
  it('Should not find user', () => {
    const userId = '5'
    const user = users.getUser(userId)
    
    expect(user).toNotExist()
  })
})