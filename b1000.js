const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (args) => {
  const result = args.split(" ").reduce((p, c) => parseInt(p) + parseInt(c), 0);
  console.log(result);
  rl.close();
});

// * 23181699	demnodey	1000	맞았습니다!!	7356	136	node.js / 수정	288
