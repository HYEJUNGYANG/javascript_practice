// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string); // 안녕!

// 특수 문자 출력하는법
string = '"안녕!"'; // 문자열 자체에 따옴표를 넣고싶으면 ''(작은따옴표) 안에서는 ""(큰따옴표)를 넣어서 표기하거나 그 반대로
console.log(string); // "안녕!"

string = '안녕!\n반가워!';
console.log(string); // 안녕!(줄바꿈)반가워!

string = '안녕!\n반가워!\t\t내 이름은\\'; // \(백 슬래시)를 문자열 안에 넣고싶으면 두 번 입력해야함
console.log(string); // 안녕!(줄바꿈)반가워!(탭 2번)내 이름은\

string = '\u09ac'; // 유니코드를 표시하고 싶다면 앞에 \u 붙이기
console.log(string); // ব

// 템플릿 리터럴 (Template Literal) ``
let id = '혜정';
let greetings = "'안녕!, " + id + "👋🏻\n즐거운 하루 보내요!'"; // 변수 활용하고 싶을때 매번 +로 연결하는 것이 번거로움
console.log(greetings); //  '안녕!, 혜정👋🏻(줄바꿈)즐거운 하루 보내요!'

// 중간에 변수 활용은 ${} 이용해서 중괄호 안에 변수명 넣기
// `` 사용하면 \n 사용할 필요 없이 줄바꿈 해서 표현하면 됨
greetings = `'안녕, ${id}👋🏻
즐거운 하루 보내요!'`;
console.log(greetings);
