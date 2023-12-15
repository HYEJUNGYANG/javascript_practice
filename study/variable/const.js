// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수 변수 or 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5; // 항상 대문자, _로 단어 분류

// 2. 재할당 불가능한 상수변수 or 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
};
// apple = {};
// const 재할당만 불가능하고 변경은 가능
console.log(apple);
apple.name = 'orange';
console.log(apple);
apple.display = '🍏';
console.log(apple);
