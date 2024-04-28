const person = {
    name: "John Doe",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const boundGreet = person.greet.bind(person);
  boundGreet(); // Output: "Hello, my name is John Doe."
  