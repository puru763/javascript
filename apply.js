const person = {
    name: "John Doe",
    greet: function(greeting, punctuation) {
      console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    }
  };
  
  const anotherPerson = {
    name: "Jane Smith"
  };
  
  person.greet.apply(anotherPerson, ["Hello", "!"]);  // Output: "Hello, my name is Jane Smith!"
  