function timer(n) {
    if (n === 0) {
        console.log("¡Despegue!");
        return;
    }
    setTimeout(() => {
        timer(n - 1);
    }, 1000)
    console.log(n);
}

/* console.log(timer(5)); */

function sum(n) {
    if (n === 10) return 0;
    return n + sum(n + 1)
}

console.log(sum(5));

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial: ", factorial(5));


const arrayN = [1,
    [2, 3],
    [4,
        [5],
        [6,
            [10, 5]
        ]
    ]
];

function sumArr(arr) {
    let sum = 0;
    for (let item of arr) {
        if (Array.isArray(item)) {
            sum += sumArr(item);
        } else {
            sum += item;
        }
    }
    return sum;
}

console.log(sumArr(arrayN));

/* const arr =[1,2,3,4,5];
let left = 0;
let right =arr.length-1;*/

function isPalindrome (str){
    let left = 0;
    let right =arr.length-1;

    while (left<right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log("Es palindromo: ", isPalindrome(("anita lava la tina").replaceAll("","")))


let str = ["a", "b", "c", "d", "e"];
console.log(str[0]); // "a"
console.log(str[3]); // "d"
str.forEach(letter => console.log(letter));
str.push("f"); // Añade "f" al final
console.log(str);
str.pop(); // Elimina "e"
console.log(str);
const upperCaseStr = str.map(letter => letter.toUpperCase());
console.log(upperCaseStr); // ["A", "B", "C", "D", "E"]
