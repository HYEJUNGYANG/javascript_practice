// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참); // true
console.log(거짓); // false

// 활용예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated); // false

// Falshy 거짓인 값
// !! 앞에 붙이면 값을 불리언 값으로 출력 가능
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!''); // false (빈 문자열)
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// Truthy 참인 값
console.log(!!1); // true (0이 아닌 양수)
console.log(!!-1); // true (0이 아닌 음수)
console.log(!!'text'); // true (빈 문자열은 아닌)
console.log(!!{}); // true (object는 비어있긴 하지만 object자체가 존재하기 때문에)
console.log(!!Infinity); // true
