function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
    return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!!'));
    //return Promise.resolve(`π => π`);
}

getChicken()
    .catch(() => 'π')
    .then(fetchEgg) // == (chicken) => fetchEgg(chicken)
    .then(fryEgg) // == (egg) => fryEgg(egg)
    .then(console.log); // == (friedEgg) => console.log(friedEgg)
