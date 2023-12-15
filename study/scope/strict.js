// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
'use strict';

// var x = 1;
// delete x; // - ❌

function add(x) {
    var a = 2;
    // b = a + x;  // - ❌(b가 선언되어 있지 않음)
    var b = a + x;
    console.log(this); // undefined
}
add(1);

const array = [1, 2, 3];
for (let num of array) {
    // for(num of array) 라고 적으면 num is not defined 에러가 뜸
    console.log(num);
}
