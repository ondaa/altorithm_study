const readline = require("readline");

const rl = readline.createInterface(process.stdin);

let T = 0;
let isNextCount = false

let count = 0
let run_count = 0

let pos = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0 
}

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
        const numPos = value.map(v => parseInt(v)) 

        pos.x1 = numPos[0]
        pos.y1 = numPos[1]
        pos.x2 = numPos[2]
        pos.y2 = numPos[3]
    }

    // 행성위치 및 크기
    if (length === 3 && isNextCount) {
        const rv = value.map(v => parseInt(v))
        // 0 x 1 y 2 r

        let d = Math.pow(pos.x1 - rv[0], 2) + Math.pow(pos.y1 - rv[1], 2);
        console.log(d)
        d = Math.pow(pos.x2 - rv[0], 2) + Math.pow(pos.y2 - rv[1], 2) ;
        console.log(d)

        run_count++;
    }

    // 초기화
    if (count !== 0 && count === run_count) {
        isNextCount = false
        count = 0;
        run_count = 0

        pos = {
            x1: 0,
            y2: 0,
            x2: 0,
            y2: 0 
        }
    }
})

/**
 * 입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 
 * 그 다음 줄부터 각각의 테스트케이스에 대해 첫째 줄에 출발점 (x1, y1)과 도착점 (x2, y2)이 주어진다. 
 * 두 번째 줄에는 행성계의 개수 n이 주어지며, 세 번째 줄부터 n줄에 걸쳐 행성계의 중점과 반지름 (cx, cy, r)이 주어진다. 
 * 입력제한은 다음과 같다. (-1000 ≤ x1, y1, x2, y2, cx, cy ≤ 1000, 1 ≤ r ≤ 1000, 1 ≤ n ≤ 50)
 * 좌표와 반지름은 모두 정수이다.
 */


 /**
  * 2 total count
  * 
  * -5 1 12 1 // x1, y1 ,x2, y2
  * 7 // planet count
  * 1 1 8 // planet 1
  * -3 -1 1 // planet 2
  * 2 2 2 // planet 3
  * 5 5 1 // planet 4
  * -4 5 1 // planet 5
  * 12 1 1 // planet 6
  * 12 1 2 // planet 7
  * 
  * -5 1 5 1 // x1, y1, x2, y2
  * 1 // planet count
  * 0 0 2 // planet 1
  */