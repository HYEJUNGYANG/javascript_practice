// quiz1문제들을 고차함수로 이용해서 for, if를 사용하지 않고 표현
// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
// function replace(array, from, to) {
//     const replaced = Array.from(array);
//     replaced.forEach(
//         (value, index) =>
//             (replaced[index] = replaced[index] === from ? to : value)
//     );
//     return replaced;
// }
// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array, '🍓', '🥝');
// console.log(result);

function replace(array, from, to) {
    return array.map((item) => (item === from ? to : item));
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
// function count(array, item) {
//     let counter = 0;
//     array.forEach((value) => value === item && counter++);
//     return counter++;
// }
// console.log(count(['🍌', '🥝', '🍇', '🥝', '🥝', '🍑', '🥝'], '🥝'));

function count(array, item) {
    return array.filter((value) => value === item).length;
    // return array.reduce((count, value) => {
    //     if (value === item) {
    //         count++;
    //     }
    //     return count;
    // }, 0);
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
// function match(input, search) {
//     const result = [];
//     input.forEach((value) => search.includes(value) && result.push(value));
//     return result;
// }
// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

function match(input, search) {
    return input.filter((item) => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈4
// 5이상(보다 큰)의 숫자들의 평균
// function average(array) {
//     let sum = array.reduce(
//         (sum, value) => (value >= 5 ? (sum += value) : (sum += 0)),
//         0
//     );
//     let cnt = 0;
//     array.forEach((value) => value >= 5 && cnt++);
//     const result = sum / cnt;
//     return result;
// }
const nums = [3, 16, 5, 25, 4, 34, 21];
// console.log(average(nums));

const result2 = nums
    .filter((num) => num > 5) // 16, 25, 34, 21
    .reduce((avg, num) => avg + num / array.length, 0); // array.length이 어디서 나온건지 좀 더 생각해보고 수정하기
console.log(result2);
