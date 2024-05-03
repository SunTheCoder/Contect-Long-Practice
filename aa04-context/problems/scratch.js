// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
  
//     bark = () => {
//       console.log(`${this.name} barked at you`);
//     }
//   }
  
//   const fido = new Dog("Fido");
//   fido.bark(); // Fido barked at you
// //   const fidoBark = fido.bark;
// //   fidoBark();  // Fido barked at you

//   const beto = new Dog("Beto");
//   beto.bark()

let x = 0;
let y = 1;
console.log(x.toExponential(y));

class User {
  constructor(name) {
    this.name = name;
  }

  changeName(newName) {
    this.name = newName;
    this.speak();
  }

  speak() {
    console.log(this.name);
  }

}

const user = new User("Brady");
changeName = user.changeName;
changeName("Brian");
