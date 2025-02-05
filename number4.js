let input = "Hello World"

function OutputString() {
    console.log('Output String: ', input.split("").map((input, index) => (index % 2 === 1) ? input : "*").join(""));
}

function HashedChar() {
    console.log('Output String: ', input.split("").map((input, index) => (index % 2 === 0) ? input : ",").join(""));
}

console.log('Input String: ', input);
OutputString();
HashedChar();