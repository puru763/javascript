function createAdder(x, callback) {   //taking functions  as   an  arguments 
    return function(y) {
      return callback(x, y);   ///returning  function in  return 
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const add5 = createAdder(5, add);
  console.log(add5(3)); 
  const add10 = createAdder(10, add);
  console.log(add10(3)); 