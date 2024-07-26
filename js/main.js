

/*------------------------------------ 5-masala --------------------------------------*/

/* 1-misol */
/* const userList = [
    {
        id:1,
        name:"Botir",
        age:20,
        hobby:"Football"
    },
    {
        id:2,
        name:"Anvar",
        age:22,
        hobby:"Basketball"
    },
    {
        id:3,
        name:"Shohrux",
        age:20,
        hobby:"Basketball"
    },
    {
        id:4,
        name:"Akram",
        age:0,
        hobby:"Football"
    }
]
function collectNames(arr){
    let res = []
    for(let user of arr){
        if(user.age > 20){
            res.push(user.page);
        }
    }
    return
}
let res = collectNames(userList)
console.log(res); */

/* 2-misol */
/* const arr = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];
function findDuplicates(arr) {

    const duplicates = [];
    const seen = new Set();
    const added = new Set();
    arr.forEach(item => {
        if (seen.has(item) && !added.has(item)) {
            duplicates.push(item);
            added.add(item);
        } 
        else {
            seen.add(item);
        }
    });

    return duplicates;
}

const result = findDuplicates(arr);
console.log(result); */

/* 3-misol */
/* let numbers = [22,122,3,4,222,123,43]

function changeArr(arr){
    let max = arr[0]
    for(let num of arr){
        if(num >= max){
            max = num
        }
    }
    arr.unshift(max)
    return arr;
}
const res = changeArr(numbers)
console.log(res); */

/* 4-misol */
/* xato */

/* 5-misol */
/* function reverseArray() {
    const num = parseInt(prompt("Son kiriting:"), 10);
    
    if (isNaN(num) || num <= 0) {
        console.log("Yaroqsiz son. Iltimos, musbat son kiriting.");
        return [];
    }

    const array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
    
    const reversedArray = array.reverse();
    return reversedArray;
}

const result = reverseArray();
console.log(result);
 */

/* ------------------------------------------- 6-masala--------------------------------------- */   

/* 1-misol */
/* function addTwoNumbers() {
    const firstNumber = parseFloat(prompt("Birinchi sonni kiriting:"));
    const secondNumber = parseFloat(prompt("Ikkinchi sonni kiriting:"));
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Yaroqsiz son. Iltimos, son kiriting.");
        return null;
    }

    const sum = firstNumber + secondNumber;
    return sum;
}

const result = addTwoNumbers();
if (result !== null) {
    console.log("Ikkala sonning yig'indisi: " + result);
} */


/* 2-misol */
/* function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log("Array sonlarning yig'indisi: " + result);  */

/* 3-misol */
/* function filterPositiveNumbers(numbers) {

    const positiveNumbers = numbers.filter(function(number) {
        return number > 0;
    });
    
    return positiveNumbers;
}

const numbers = [-1,-4, 2, 33, -3, 9, 4, 5, -39 ,27, -6];
const result = filterPositiveNumbers(numbers);
console.log("Musbat sonlar: " + result); */

/* 4-misol */
/* function convertArrayElements(arr) {
    return arr.map(item => {
        if (typeof item === 'string') {
            const parsedNumber = parseFloat(item); 
        return isNaN(parsedNumber) ? 0 : parsedNumber;
        }
        return item;
    });
}


const arr = ["5", 2, "true", "false", "19", "salom", 7];
const result = convertArrayElements(arr);
console.log(result);
 */

/* 5-misol */
/* const persons = [
    {
        name: "Abdulloh",
        age: 19,
        status: false
    },
    {
        name: "Ibrohim",
        age: 20,
        status: true
    },
    {
        name: "Shodiyor",
        age: 18,
        status: false
    }
];

for (let i = 0; i < persons.length; i++) {
    if (persons[i].status === false) {
        console.log(persons[i].name);
    }
} */

/* 6-misol */
/* function calculateAverage(arr) {
    const length = arr.length;
    
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += arr[i];
    }
    
    const average = sum / length;
    return average;
}

const num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
const num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
const num3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

const numbers = [num1, num2, num3];

const average = calculateAverage(numbers);
console.log("O'rtacha arifmetik qiymat: " + average); */

/* 7-misol */

/* function adjustFirstElement(arr) {

    let firstElement = arr[0];
    
    if (firstElement % 2 === 0) {
        arr[0] = firstElement + 1;
    } 
    else {
        arr[0] = firstElement + 1; 
    }
    
    return arr;
}

const array = [8, 2, 6]; 
const updatedArray = adjustFirstElement(array);
console.log(updatedArray); 

const anotherArray = [7, 2, 6]; 
const updatedAnotherArray = adjustFirstElement(anotherArray);
console.log(updatedAnotherArray);  */

/* 8-misol */

/* function findCommonValues(array1, array2) {

    const set1 = new Set(array1);
    const set2 = new Set(array2);
    
    const commonValues = [];
    
    set1.forEach(value => {
        if (set2.has(value)) {
            commonValues.push(value);
        }
    });
    
    console.log("Umumiy qiymatlar:", commonValues);
}

const array1 = ["Komiljon", "tablet", "salom", "apple"];
const array2 = ["apple", "salom", "iphone", "grape"];

findCommonValues(array1, array2);
 */






