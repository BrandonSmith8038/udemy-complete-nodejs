console.log('Starting App')


setTimeout(() => {
  console.log('Inside Of Callback')
}, 2000)

setTimeout(() => {
  console.log('Second Set Timout')
},0)


console.log('Finishing App')