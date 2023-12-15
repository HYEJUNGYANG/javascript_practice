let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer); // 123
console.log(negative); // -123
console.log(double); // 1.23

// 123이라는 값을 2, 8, 16진수 표현으로
let binary = 0b1111011; // 2진수 (0b를 앞에 붙임)
let octal = 0o173; // 8진수 (0o를 앞에 붙임)
let hex = 0x7b; // 16진수 (0x를 앞에 붙임)
console.log(binary); // 123
console.log(octal); // 123
console.log(hex); // 123

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 1234567890123456789012345678901234567890n; // 큰 숫자를 나타낼 때는 뒤에 n을 붙여서 bitInt 타입으로!! (Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53-1 보다 큰 정수 표현 가능)
console.log(bigInt); // 1234567890123456789012345678901234567890n
