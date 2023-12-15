// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다! 라는 것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있다
const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기!
const iterator = array.values();
while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}

// array.values()말고 array라고 적어도 됨
for (let item of array.values()) {
    console.log(item);
}

const obj = { id: 123, name: 'jung' };
for (let key in obj) {
    // object는 iterable하지 않으므로 for of 사용 불가능! for in으로 key 받아오기
    console.log(key);
}
