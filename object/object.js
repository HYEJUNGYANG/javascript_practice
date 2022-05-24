// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
  name: 'apple', // key를 그냥 name이라는 문자를 작성해도 되고
  'hello-bye': '✋', // 문자열 형태로도 작성 가능, prettier을 사용하고 있다면 그냥 단어로 작성하면 작은따옴표를 없애버리기 때문에 -와 같은 특수문자를 넣어두면 괜찮음
  0: 1, // 숫자
  ['hello-bye1']: '✋', // 대괄호[]안에 문자열을 넣어서 선언할 수도 있음
  ['monkey']: '🙊'
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
console.log(apple['monkey']);
apple['name'];

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
