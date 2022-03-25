// 함수 선언문 function name() { }
// 함수 표현식 const name = function() { }
// 표현식으로 사용되는 함수는 이름을 작성해도 외부에서 접근할 수 없음(보통 생략)
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
    return a + b;
};
// return만 존재한다면 {}와 return 생략 가능
add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function();

// IIFE (Immediately-Invoked Function Expressions)
// 많이 사용되는 표현식은 아님
(function run() {
    console.log('😊');
})();
