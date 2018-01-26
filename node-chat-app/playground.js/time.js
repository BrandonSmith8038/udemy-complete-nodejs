// Jan 1st 1970 00:00:00

const moment = require('moment')

// const date = moment()
// console.log(date.format('MMM Do, YYYY'))


/*const time = moment()
console.log(time.format('h:MM a'))*/

const createdAt = 1234
const date = moment(createdAt)
console.log(date.format('h:mm a'))

const someTimeStamp = moment().valueOf()
console.log(someTimeStamp)