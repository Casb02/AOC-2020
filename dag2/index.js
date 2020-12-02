let globalcheckp1 = 0;
let globalcheckp2 = 0;

let fs = require('fs');
let file = "input.txt";
let fileinput = fs.readFileSync(file).toString();
fileinput = fileinput.split('\r\n');

for (let i in fileinput) {

    let input = fileinput[i].split(" ")

        let minmax = input[0].split('-')

        let min = minmax[0];
        let max = minmax[1];

        let crt;
        if (input[1] !== undefined){
            crt = input[1].replace(':', '');
        } else {
            crt = "";
        }


        let ipt = input[2];
        part1(crt, min, max, ipt);
        part2(crt, min, max, ipt);
}

console.log("Aantal correct part1 " + globalcheckp1)
console.log("Aantal correct part2 " + globalcheckp2)

function part1(crt, min, max, ipt) {
    if (crt && min && max && ipt !== undefined) {
        let cc = 0;
        ipt = ipt.split("");

        for (let i in ipt) {
            if (ipt[i] === crt) {
                cc++;
            }
        }

        if (cc >= min && cc <= max) {
            globalcheckp1++;
            console.log(ipt + " voldoet aan eisen")
        }
    }
}

function part2(crt, a, b, ipt) {
    if (a || b !== undefined) {
        a--;
        b--;
        let x = ipt.charAt(a);
        let y = ipt.charAt(b);
        if (x === crt && y !== crt || x !== crt && y === crt) {
            globalcheckp2++
        }
    }
}
