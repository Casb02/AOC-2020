console.log("Start Search");
let found1 = false;
let found2 = false;

let fs = require('fs');
let file = "input.txt";
let input = fs.readFileSync(file).toString();

let array = input.split('\r\n');

//Part 1
for (let x = 0; x < 200; x++) {
    for (let y = 0; y < 200; y++) {
        is2020(parseInt(array[x]), parseInt(array[y]));
    }
}

//Part 2
for (let x = 0; x < 200; x++) {
    for (let y = 0; y < 200; y++) {
        for (let z = 0; z < 200; z++) {
            is3x2020(parseInt(array[x]), parseInt(array[y]), parseInt(array[z]));
        }
    }
}

function is2020 (num1, num2) {
    let nums = num1 + num2;
    if (found1 === false) {
        if (nums === 2020) {
            console.log("Match gevonden voor 2 cijferige combinatie");
            console.log("Nummer 1: " + num1);
            console.log("Nummer 2: " + num2);
            found1 = true;
        }
    }
}

function is3x2020 (num1, num2, num3) {
    let nums = num1 + num2 + num3;
    if (found2 === false){
        if (nums === 2020) {
            console.log("Match gevonden voor 3 cijferige combinatie");
            console.log("Nummer 1: " + num1);
            console.log("Nummer 2: " + num2);
            console.log("Nummer 3: " + num3);
            found2 = true;
        }
    }
}
