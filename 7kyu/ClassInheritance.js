class Shark extends Animal {
    constructor(name,age,status) {
      super(name,age,0,'shark',status);
    }
  }
  
  class Cat extends Animal {
    constructor(name,age,status) {
      super(name,age,4,'cat',status);
    }
    introduce(){
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
  }
  
  class Dog extends Animal {
    constructor(name,age,status,master) {
      super(name,age,4,'dog',status);
      this.master = master
    }
    greetMaster(){
      return `Hello ${this.master}`
    }
      
  }

//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

//should have appended the Meow Meow onto the original introduce()    `${super.introduce}  Meow meow!`