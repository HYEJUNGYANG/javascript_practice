// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const jung = { name: '혜정' };
const dog = { name: '와우', emoji: '🐶', owner: jung };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
// 특정 객체에서 다른 객체를 참조하고 있다면 그 참조하고 있는 객체까지 얼리지는 ❌
jung.name = '혜정이';
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isFrozen(cat));
console.log(Object.isSealed(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가만 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
