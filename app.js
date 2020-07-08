//### Function #1
//const modifiedfoods = [pizza, burger, fingerChips, donuts, springRoll];
const foods = [`pizza`, `burger`, `fingerChips`, `donuts`, `springRoll`];
let modifiedFood = slice(1, 3);

function slice(start, end) { //zero based index
    //[start,end)
    return foods.filter((item, index) => index >= start && index <= end);

}
console.log(modifiedFood);
//modifiedFood = foods.splice(3,0,`noodles`, `icecream`);

const foods1 = [`pizza`, `burger`, `fingerChips`, `donuts`, `springRoll`]
foods1.splice(3, 0, "icecreame", `fingerChips`)
console.log(foods1);


//Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
//### Function #2
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArray) {
    return numberArray.filter(num => num % 2 == 0);
}
console.log(isEven(numberArray));


//### Function #3
function isPrime(numberArray) {
    return numberArray.filter(function (number) {

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    });

}
console.log((isPrime(numberArray)));
//### Function #4
function nonprime(numberArray) {
    return numberArray.filter(function (num) {
        return !isPrime(numberArray).includes(num);
    });
}
console.log(nonprime(numberArray));

//### Function #5: Lambda
function isEven1(numberArray) {
    return numberArray.filter(item => item % 2 == 0)
};
console.log(isEven1(numberArray));

//### Function #6 map
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    return myArray.map(item => item * item)
}
console.log(findSquareOfNumbers(myArray))

//### Function #7: reduce
myArray1 = [2, 3, 5, 10];

function multiply1(myArray) {
    return myArray1.reduce((initial, current) => initial * current)

}

console.log(multiply1(myArray1))