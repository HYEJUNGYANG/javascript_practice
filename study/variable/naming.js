/* 
  변수 규칙! 
 - 라틴문자(0-9, a-z, A-Z), _ 사용가능
 - 대소문자를 구분함
 - 추천: camelCase (likeThis) ✅
 - 한국어 추천❌
 - 예약어 ❌
 - 숫자로 시작 ❌
 - 특수문자 ❌ (_, $ 두가지는 예외)
 - 이모지 ❌
 - 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성
*/

let apple;
let redApple;

// 니쁜예제 💩
let number = 20; // 의미가 없음
// 좋은예제 ✨
let myAge = 20;

// 나쁜예제 💩
let audio1;
let audio2;
// 좋은예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁! 🍯
// audio를 나타내는 변수가 여러개일 경우에 audio를 먼저 작성하고 그 뒤에 구체적인 것
let audioBackground;
let audioWind;
