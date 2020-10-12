const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (args) => {
  const arr = args.split(" ").map((v) => parseInt(v));
  const result = arr[0] - arr[1];
  console.log(result);
  rl.close();
});

// * 23197047	demnodey	1001	맞았습니다!!	7600	148	node.js / 수정	285
