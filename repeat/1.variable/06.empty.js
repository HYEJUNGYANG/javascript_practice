// null, undefined
let variable; // 초기화만 하고 할당하지 않은 상태인 undefined -> 값이 있는지 없는지 정해지지 않은 상태
console.log(variable); // undefined

variable = null; // 명시적으로 할당, 비어있다는 표현
console.log(variable); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof null); // object - js자체에서 null을 표현하기 위해 object를 만듦
console.log(typeof undefined); // undefined
