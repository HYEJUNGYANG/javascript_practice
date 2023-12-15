function runInDelay(seconds) {
    // 성공적으로 수행했을 때, 즉 then을 호출할 때 사용할 resolve
    // 실패한 걸 알려주는 reject
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve();
        // }, seconds * 1000)
        // 어떤 인자도 받지 않고 어떤 인자도 받지 않기 때문에 아래처럼 함수이름만 작성 가능!
        if (!seconds || seconds < 0) {
            reject(new Error('seconds가 0보다 작음!'));
        }
        setTimeout(resolve, seconds * 1000);
    });
}

runInDelay(-1)
    .then(() => console.log('타이머 완료!')) // 필요한일을 수행
    .catch(console.error) // 에러를 처리 // error => console.log(error) 전달되는 인자와 호출할때 전달하는 인자가 같으므로 생략 가능
    .finally(() => console.log('끝났다!')); // 성공, 실패 상관없이 최종적으로 무조건 호출! - 필수는 X
