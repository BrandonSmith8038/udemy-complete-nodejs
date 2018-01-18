<<<<<<< HEAD
const square = x => x * x

console.log(square(9))
=======
const square = x => x * x;

console.log(square(9));
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa

const user = {
  name: 'Brandon',
  sayHi: () => {
<<<<<<< HEAD
    console.log(arguments)
    console.log(`Hi, I'm ${this.name}`)
  },
  sayHiAlt () {
    console.log(arguments)
    console.log(`Hi, I'm ${this.name}`)
  }
}
user.sayHi(1,2,3)
user.sayHiAlt(1,2,3)
=======
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  }
};
user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
>>>>>>> c14581a9ba8424847bb9c2fba92f93ab564438aa
