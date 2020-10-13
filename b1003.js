const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var count = 0;
var run_count = 0;

rl.on("line", (args) => {
    const n = parseInt(args)

    if (count === 0) {
        count = n
        return;
    } else {
        let one = 0;
        let zero = 0;

        function fibonacci (n) {
            if (n === 0) {
                zero++;
                return 0
            } else if (n === 1) {
                one++;
                return 1
            } else {
                return fibonacci(n - 1) + fibonacci(n - 2)
            }
        }

        for (let i = 0; i < n; i++) {
            
        }

        fibonacci(n)
        console.log(zero + " " + one)

        run_count++
        if (count === run_count) { rl.close() }
    }
});