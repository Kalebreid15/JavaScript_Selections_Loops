//  Exercise 1: Ignore even numbers with for-loop
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

// Exercise 1 (cont'd): Ignore even numbers with while-loop
let j = 0;
while (j < 100) {
    if (j % 2 === 0) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}

//  Exercise 2: FizzBuzz using for-loop
for (let i = 1; i < 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    if (output) {
        console.log(`${i}: ${output}`);
    }
}

//  Exercise 3: FizzBuzz using while-loop
let k = 1;
while (k < 100) {
    let output = "";

    if (k % 3 === 0) output += "Fizz";
    if (k % 5 === 0) output += "Buzz";

    if (output) {
        console.log(`${k}: ${output}`);
    }

    k++;
}

let value = Math.round(Math.random() * 500); // Random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // Random number between 100 and 500

let found = false;

for (let i = 1; i <= n; i++) {
    if (i === value) {
        console.log(`Found Value: ${value}`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`Did not find ${value} within 1–${n}..`);
}
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // 1–10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // 1–10
let start = Math.round(Math.random() * (10 - 1) + 1);        // 1–10
let end = Math.round(Math.random() * (1000 - 100) + 100);    // 100–1000

console.log(`Fizz Divisor: ${fizzDivisor}`);
console.log(`Buzz Divisor: ${buzzDivisor}`);
console.log(`Counting from ${start} to ${end}...`);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor === 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor === 0) {
        output += "BUZZ";
    }

    if (output !== "") {
        console.log(`${i}: ${output}`);
    }
}