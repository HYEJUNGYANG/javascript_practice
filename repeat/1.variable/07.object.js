let name = 'apple';
let color = 'red';
let display = '🍎';
// 과일 수가 많아지면 매번 변수명에 그 과일 이름 넣고 여러개의 변수를 만들어야 하는 번거로움 발생
let orangeName = 'orange';

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};

console.log(apple); // { name: 'apple', color: 'red', display: '🍎' }
console.log(apple.name); // apple
console.log(apple.color); // red
console.log(apple.display); // 🍎

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊'
};

console.log(orange); // { name: '오렌지', color: 'orange', display: '🍊' }
