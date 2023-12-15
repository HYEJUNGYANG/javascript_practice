// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 표현식(참인 경우) : 표현식(거짓인 경우)
let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log('😆');
}
fruit === 'apple' ? console.log('🍎') : console.log('😆');

let emoji = fruit === 'apple' ? '🍎' : '😆';
console.log(emoji);
