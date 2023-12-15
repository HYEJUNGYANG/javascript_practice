// 원시타입은 '값'이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a); // 1
console.log(b); // 2

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
// 0x1234(예시)
let apple = {
  name: '사과'
};
let orange = apple; // 0x1234
orange.name = '오렌지';
console.log(apple); // { name: '오렌지' }
console.log(orange); // { name: '오렌지' }
// => 참조값이 복사되어 있기 때문에 orange.name == apple.name
