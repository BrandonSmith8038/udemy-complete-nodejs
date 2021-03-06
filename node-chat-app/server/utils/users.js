[{
  
}]


//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = []
  }
  
  addUser(id, name, room) {
    const user = {id, name, room}
    this.users.push(user)
    return user
  }
  
  removeUser(id) {
    let foundUser = this.getUser(id)
    
    if(foundUser){
      this.users = this.users.filter((user) => user.id !== id)
    }
    return foundUser
  }
  
  getUser(id) {
    return this.users.filter(user => user.id === id)[0]
  }
  
  getUserList(room) {
    const users = this.users.filter(user => user.room === room)
    
    const namesArray = users.map(user => user.name)
    
    return namesArray
  }
}


module.exports = {Users}