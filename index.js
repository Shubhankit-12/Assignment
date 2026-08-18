const readlineSync = require("readline-sync");
let addAnother = true;
console.log("This is Assignment File");

let arr = [];

const assign = () => {
  // enter the name
  const name = readlineSync.question("Enter your name: ");
  // enter the time you want to spent
  const time = readlineSync.question(
    "Enter the time in minutes you want to use the system: ",
  );
  // now its convereted to number
  const used = parseInt(time);
  // checks number should be even
  if (isNaN(used) || used <= 0) {
    console.log("Please enter a valid number of minutes.");
    return;
  }

  let cost;
  // in this first hour is charged 60 rest is calculated and charged rs 10 every 1 hour
  if (used <= 60) {
    cost = 30;
  } else {
    const extraMinutes = used - 60;
    const extraHours = Math.ceil(extraMinutes / 60);
    cost = 30 + extraHours * 10;
  }
  //  now the name and usage time cost is addedd in the array
  arr.push({ name, time: used, cost });
  console.log(`${name}, your total cost is ${cost}`);
};

// this loop will repeat for every 3 fixed participants
for (let i = 1; i <= 3; i++) {
  console.log(`-----------${i}`);
  assign();
}
// this while loop will check if next lot have to be addedd aor not
while (addAnother) {
  let add = readlineSync.question("Enter y or no ");
  if (add.toLowerCase() === "y") {
    assign();
  } else {
    addAnother = false;
  }
}

console.log("array", arr);

const maxPerson = arr.reduce((max, person) =>
  person.time > max.time ? person : max,
);
console.log(
  `${maxPerson.name} used the system the longest: ${maxPerson.time} minutes`,
);
