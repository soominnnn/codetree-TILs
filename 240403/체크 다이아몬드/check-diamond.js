const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();

function drawCheckDiamond(n) {
    let size = 2 * n - 1;
    let diamond = '';
    
    // 상단 부분 그리기
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i - 1);
        let stars = '* '.repeat(i + 1).trim();
        diamond += spaces + stars + '\n';
    }
    
    // 하단 부분 그리기
    for (let i = n - 2; i >= 0; i--) {
        let spaces = ' '.repeat(n - i - 1);
        let stars = '* '.repeat(i + 1).trim();
        diamond += spaces + stars + '\n';
    }
    
    return diamond;
}

// 예제 테스트
console.log(drawCheckDiamond(+input));