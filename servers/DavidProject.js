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
  function calculateBMI(weight, height) {
    const BMI = weight / (height * height);
    // return the value
    return BMI;
  }
  
  // capture the output by assigning it to a variable
  const BMI = calculateBMI(82, 1.79); // resolves to 25.592 etc..

  //Different way of writing a function
  const allCapsArrowFunction = (string) => {
    return string.toUpperCase()
}

console.log(allCapsArrowFunction('hello, world with arrows!'))

// Methods => contains multiple function inside one object
const speeches = {
  greeting: function () {
    console.log ('hello')
  },
  farewell: () => console.log('goodbye')
}

speeches.greeting()
speeches.farewell()

//Array
const mix = [1, 'string', true]
const second = mix[1]

console.log(second)

//Map
function callback () {
  console.log('test')
}

const elements = [1, 2, 3]

elements.map(callback)

//Map with Returning function 
function david () {
  return 'david'
}

const elements2 = [1, 4, 3, 2]

const newArray = elements2.map(david)

console.log(newArray)

console.log(elements2.map(david))