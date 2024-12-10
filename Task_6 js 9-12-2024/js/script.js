const log = console.log;

// Create a function that finds the maximum number in an array
let arr = [45, 41, 5, 87, 7, 15];

function getMax(arr) {
    let max = arr[0];
    arr.forEach((element) => {
        if (element > max) {
            max = element;
        }
    });
    let max_value = max;
    log(`The maximum value in the array is ${max_value}`);
}
getMax(arr)



// create function Return a Boolean if a number is divisible by 10
let number= +prompt("Enter a number to check if it is divisible by 10");
function divisibleBy10(number) {
    return number % 10 === 0;
}
log(divisibleBy10(number)); 


// Create a function that reverses an array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
let reversedArray = reverseArray(arr);
log(reversedArray);