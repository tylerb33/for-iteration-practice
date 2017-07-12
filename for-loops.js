console.log("works!")

// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

for (let i = 5; i < 120; i = i + 10) {
	console.log ("Value of i", i);
}


// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.


for (let i = 4096; i <= 1; i /= 2) {
  console.log(i);
}


// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

// President #2 was John Adams

// President #3 was Thomas Jefferson

let presidentsOrder = ["1", "2", "3"]
let presidents = ["George Washington", "John Adams", "Thomas Jefferson"]


for (let i = 0; i < presidents.length; i++) {
	let sentence = ""
	let currentPres = presidents[i];
  let currentOrder = presidentsOrder[i];
	sentence = "President #" + presidentsOrder[i] + " was " + currentPres;
 	console.log (sentence);
}




// You can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.

let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (prop in antSpecies) {
	console.log(prop);
}


















