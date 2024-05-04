console.log('hi');

// Part 1 of the lab

let counter = 0;

function incrementForever() {
    counter++;
    incrementForever();
}

try {
    // incrementForever();
} catch (err) {
    console.log(err);
    console.log(counter);
}

// This function will take a number and increment counter to that number

function incrementTo(num) {
    if (num <= 0 || num <= counter) return

    // console.log(counter);

    if (num === counter) return
    counter += 1;

    incrementTo(num);
}

try {
    incrementTo(10);
    console.log(counter);
} catch (err) {
    console.log(err);
}


// Part 2
let arr = [0, 2, [3, 4, [5, [6], [8]]]];
const flattenArr = (arr) => {

    if(arr.flat().length === arr.length) return arr.flat();
    return () => flattenArr(arr.flat());
};

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
        result = result();
    }
    return result;
};

console.log(trampoline(flattenArr(arr)));

// Part 3

const htmlEle = document.createElement("h1");
const body = document.querySelector("body")
body.appendChild(htmlEle)

let isPrime = true;
function primeNumbers(n) {
    
    for(i = 1; i <= n; i++) {
        for(j = 2; j < i - 1; j++) {
            if(i % j === 0) {
                console.log('not a prime number: ', i);
                isPrime = false;
                break;
            }
        }
        if(isPrime === true) {
            console.log("is a prime number: ", i);
            htmlEle.textContent += i;
        }
        isPrime = true;
    }
    setTimeout(() => {
        alert("calculation is finished");
    }, 0);
    
}

primeNumbers(10000);