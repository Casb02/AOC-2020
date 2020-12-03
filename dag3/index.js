let fs = require('fs');
let fileinput = "input.txt";
fileinput = fs.readFileSync(fileinput).toString();
fileinput = fileinput.split('\r\n');

let counterpart1 = 0;
let counterpart2 = 0;

    let count = 1;
for (let i in fileinput) {
    count++;
    fileinput[i] = fileinput[i].repeat(count)
}
// Part 1
part1(fileinput, 3)
// Part 2
let result = part2(fileinput, 1) * part2(fileinput, 3) * part2(fileinput, 5) * part2(fileinput, 7) * part22(fileinput, 1);


function part1(arr, l) {
    let lg = 0;
    for (let i in arr) {

        let ipt = arr[i].toString();
        ipt = ipt.charAt(lg)

        if (ipt === "#") {
            counterpart1++;
        }

        lg= lg + l;
    }
}

function part2(arr, l) {
    let lg = 0;
    counterpart2 = 0;
    for (let i in arr) {

            let ipt = arr[i].toString();
            ipt = ipt.charAt(lg)

            if (ipt === "#") {
                counterpart2++;
            }
        // Add length to new length
        lg= lg + l;
    }
    return counterpart2;
}

function part22(arr, l) {
    let lg = 0;
    counterpart2 = 0;
    for (let i = 0; i <= arr.length; i = i + 2) {

        if  (arr[i] !== undefined) {
            let ipt = arr[i];
            ipt = ipt.charAt(lg)
            if (ipt === "#") {
                counterpart2++;
            }
            // Add length to new length
            lg= lg + l;
        }
    }
    return counterpart2;
}


console.log("(part 1) Aantal bomen: " + counterpart1)
console.log("(part 2) Aantal bomen: " + result);
