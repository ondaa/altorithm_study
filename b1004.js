const readline = require("readline");

const rl = readline.createInterface(process.stdin);

let T = 0;
let isNextCount = false

let count = 0
let run_count = 0

let planet = []
let myPosition = []

rl.on("line", (args) => {
    if (T === 0) {
        T = parseInt(args);
        return;
    }

    const value = args.toString().split(" ");
    const length = value.length
    
    // 행성갯수
    if (isNextCount && count === 0) { 
        count = parseInt(args);
    }

    // 이동경로
    if (length === 4) { 
        isNextCount = true;
        myPosition = value.map(v => parseInt(v))
    }

    // 행성위치 및 크기
    if (length === 3 && isNextCount) {
        planet.push(value.map(v => parseInt(v)));
        run_count++;
    }

    console.log(planet)
    console.log(myPosition)

    // 초기화
    if (count !== 0 && count === run_count) {
        isNextCount = false
        count = 0;
        run_count = 0
        planet = []
        myPosition = []
    }
})