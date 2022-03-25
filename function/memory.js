function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}
const sum = add; // 메모리 주소를 복사해서 할당

// console.log(sum(1, 2));
console.log(add(1, 2));
