//console.log("Hello World!");

function saySomething(parameter) {
    console.log(parameter);
  }
  // passing in an argument when we call the function
  saySomething("puppies are cute"); // logs: puppies are cute
  saySomething("cats are evil"); // logs: cats are evil

  function lasVegas() {
    // define a variable in local scope
    const whatHappened = "we did naughty things";
    // return the value (output!)
    return whatHappened;
  }
  console.log(lasVegas())
  xcode-select --install
  function calculateBMI(weight, height) {
    const BMI = weight / (height * height);
    // return the value
    return BMI;
  }
  
  // capture the output by assigning it to a variable
  const BMI = calculateBMI(82, 1.79); // resolves to 25.592 etc..