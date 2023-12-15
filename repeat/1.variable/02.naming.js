/** 변수 규칙!!!
 * 라틴문자(0-9, a-z, A-Z, ), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple; // camelCase

// 나쁜예제 💩
let number = 20; // 나이를 저장하는 변수이름을 number로 짓게 되면 이 변수명만 보고 나이를 의미하는 것인지 파악하기 쉽지 않음

// 좋은예제 ✨
let myAge = 20;

// 나쁜예제 💩
let audio1;
let audio2; // 이렇게 변수 뒤에 숫자 붙여서 네이밍 하는 것은 좋지 않음

// 좋은예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁 🍯
let audioBackground;
let audioWind; // 이런식으로 무엇인지를 먼저 나타내고 구체적인 것을 뒤로 빼두면 찾을 때 좋음
