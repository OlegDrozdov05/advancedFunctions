//1
const reserveWords = function(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(' ');
}

const reversedWords = reserveWords('Hello World')
console.log(reversedWords)

//2

function* arrayIterator(arr) {
    for(let i = 0; i < arr.length; ++i) {
        yield arr[i]
    }
}

const gen = arrayIterator(['apple', 'banana', 'cherry'])

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().done)

//3

const map = function(arr, func) {
    return arr.map(func)
}

const intArr = [1,2,3,4,5]
const callback = (item, index, array) => item * 2
const res = map(intArr, callback)

console.log(intArr)
console.log(res)

//4

function createLogger(errorType) {
    return function(errorMessage) {
        console.log(`${errorType}${errorMessage}`)
    }
}

const errorLog = createLogger("ERROR: ")
errorLog("ОШИБКА!")

const debugLog = createLogger("DEBUG: ")
debugLog("Важная отладочная информация!")

//5

const arraySum = function sum(arr) {
    if(arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}

console.log(arraySum([1,2,3,4]));

//6

(function (){
    var x = Array.from(new Array(5), _ => Math.floor(Math.random() * 10 + 1))
    const min = Math.min(...x)
    const max = Math.max(...x)
  
    console.log(x)
    console.log(min)
    console.log(max)
})();

console.log(x) // x is not defined
