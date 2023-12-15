// let 재할당 가능
let a = 1;
a = 2; // 재할당

// const 재할당이 불기능
// 1. 상수 2. 상수변수 or 변수
const text = 'hello';
// text = 'hi'; // (이렇게 하면 안됨!! ❌) error!! Assignment to constant variable

// 1. 상수
// 대문자로 작성, 단어는 _로 구분
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};
// apple = {}; (❌)
// 재할당만 불가능하고 apple에 담겨져 있는 object value 변경은 가능
console.log(apple); // { name: 'apple', color: 'red', display: '🍎' }
apple.name = 'orange';
console.log(apple); // { name: 'orange', color: 'red', display: '🍎' }
