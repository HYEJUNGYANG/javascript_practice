function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('can not find 🐓'));
}

// async function fetchMeal() {
//     const egg = await fetchEgg('🐔');
//     const meal = await fryEgg(egg);
//     return meal;
// }

// fetchMeal() //
//     .then((meal) => console.log(meal));

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
    //         .then((result) => {
    //             console.log(result);
    //             return result;
    //         });
}

makeFriedEgg().then(console.log);
