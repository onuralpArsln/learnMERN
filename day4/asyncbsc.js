function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        let a = 1;
        setTimeout(() => {
            
                reject(400);

        }, 1);
        for(let i = 1 ;i<100000000000000000000000000;i++){
            a = a*i;
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