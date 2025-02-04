let numbers = [12, 7, 5, 20, 33, 42, 19, 8, 10];

let evens = [];
let odds = [];


let evenCount = 0;
let oddCount = 0;

numbers.forEach(num => {
    if (num % 2 === 0) {
        evens.push(num); 
        evenCount++; 
    } 
    else{
        odds.push(num);   
        oddCount++;       
    }
});


let evenResult = `Even Numbers: ${evens.join(', ')} | Count ${evenCount}`;
let oddResult = `Odd Numbers: ${odds.join(', ')} | Count  ${oddCount}`;

console.log("Numbers:", numbers.join(', '));
console.log(evenResult);
console.log(oddResult);
