function findLongestWord(text) {
    let words = text.split(' ');
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Ejemplo 
const text = "La tecnología ha avanzado rápidamente en los últimos años gracias a la innovación de las herramientas";
console.log("La palabra más larga es:", findLongestWord(text));
