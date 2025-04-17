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
const arreglo = [1, 2, 3, 4, 5, 6];

console.log("Suma par arreglo: ", tieneParconSuma(arreglo, 12));

const corchetes = [
    "ghugyjgjghj",
    "ab[c[d]e]f",
    "ab[c[d]e",
    "ab[c[d]]e]",
    "a]b[c",
    "data[info[level1[level2]]]done",
    "x[y[z]w]k",
    "a[b]c"
];

const comparaRec = (str, index = 0, open = 0) => {

    if (index === str.length) {
        return open === 0;
    }

    const char = str[index];

    if (char === '[') {
        return comparaRec(str, index + 1, open + 1);
    } else if (char === ']') {
        if (open === 0) return false; // bracket cerrado sin abrir
        return comparaRec(str, index + 1, open - 1);
    } else {
        return comparaRec(str, index + 1, open);
    }
}

const comparaPunt = (str) => {
    let left = 0;
    let right = str.length - 1;
    let balance = 0;

    while (left <= right) {
        if (str[left] === '[') {
            balance++;

            // Buscar cierre correspondiente desde la derecha
            while (right > left) {
                if (str[right] === ']') {
                    balance--;
                    right--; // Cerramos este ] y lo ignoramos después
                    break;
                }
                right--;
            }

            // Si no encontramos un cierre adecuado
            if (balance > 0 && right <= left) return false;
        }

        // Si encontramos un cierre sin apertura previa
        if (str[left] === ']' && balance <= 0) {
            return false;
        }

        left++;
    }

    return balance === 0;
}


/* corchetes.forEach(item => console.log(`${comparaRec(item) ? `Exito al procesar cadena ${item}` : `Error de sintaxis ${item}`}`)); */

corchetes.forEach(item => console.log(`${comparaPunt(item) ? `Exito al procesar cadena ${item}` : `Error de sintaxis ${item}`}`));