function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 2000);
    });
}

async function run() {
    try {
        const result = await myAsyncFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

run(); 