let firstname1 = "Jon";
let lastname1 = "Snow";
let gender1 = "female"; 

function getSalutation(gender) {
  return gender === "male" ? "MR." : "MS."; 
}

let salutation = getSalutation(gender1);

let greetings = `Greetings! ${salutation} ${firstname1} ${lastname1}`;
console.log(greetings);
