// Quiz!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// 1. if
if (num % 2) {
    console.log('👎');
} else {
    console.log('👍');
}

// 2. ternary
num % 2 === 0 ? console.log('👍') : console.log('👎');
// 2번 좀 더 간결하게
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
