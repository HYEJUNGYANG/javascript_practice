// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    // 0x1234를 가리킨다면
    name: '사과',
};

let orange = apple; // 동일한 메모리 주소인 0x1234를 가리킴
orange.name = '오렌지';
console.log(apple);
console.log(orange);
