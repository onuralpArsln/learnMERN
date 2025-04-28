async function myAsyncFunction() {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            reject("1ms timeout içinden reject geldi");
        }, 10000);

        let a = 1;
        const chunkSize = 10000; // Her chunk'ta işlenecek iterasyon sayısı

        for (let i = 1; i < 1000000; i++) {
            a = a * i;

            // Her chunk sonunda event loop'a nefes alma fırsatı ver
            if (i % chunkSize === 0) {
                await new Promise(r => setTimeout(r, 0));
            }
        }

        resolve(20);
    });
}

async function run() {
    try {
        const result = await myAsyncFunction();
        console.log(result);
        console.log("hatasız");
    } catch (error) {
        console.log(error);
        console.log("burası error");
    }
}

run();