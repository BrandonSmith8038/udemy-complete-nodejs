const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'Brandon'
<<<<<<< HEAD
  }
  setTimeout(() => {
    callback(user)
  }, 3000)
}

getUser(2, (user) => {
  console.log(user)
})
=======
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(2, user => {
  console.log(user);
});
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa
