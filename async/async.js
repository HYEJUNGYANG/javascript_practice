function getBanana() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('π');
    }, 1000);
  });
}

function getApple() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('π');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// λ°λλμ μ¬κ³Όλ₯Ό κ°μ΄ κ°μ§κ³  μ€κΈ°
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits() //
  // .then(fruits => console.log(fruits))λ κ°μ ννμ
  .then(console.log); // ['π', 'π']
