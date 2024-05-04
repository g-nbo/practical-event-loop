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