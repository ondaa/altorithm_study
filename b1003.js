const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var count = 0;
var run_count = 0;

function fib(n) {
  const memo = [0, 1];

  if (n === 0) return "1 0";
  if (n === 1) return "0 1";

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n - 1] + " " + memo[n];
}

rl.on("line", (args) => {
  const n = parseInt(args);

  if (count === 0) {
    count = n;
    return;
  } else {
    run_count++;

    const result = fib(n);
    console.log(result);

    if (count === run_count) {
      rl.close();
    }
  }
});

// * 23221353	demnodey	1003	맞았습니다!!	7736	152	node.js / 수정	649
