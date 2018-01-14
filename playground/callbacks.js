const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'Brandon'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(2, user => {
  console.log(user);
});
