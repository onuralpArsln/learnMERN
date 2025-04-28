function normalFonksiyon() {
    console.log("İlk işlem yapılıyor...");
    console.log("İkinci işlem yapılıyor...");
    console.log("Üçüncü işlem yapılıyor...");
}

normalFonksiyon();


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise başarıyla tamamlandı!");
    }, 1); // 1 saniye bekle
});

myPromise
    .then((message) => {
        console.log(message);  // "Promise başarıyla tamamlandı!"
    });

console.log("Bu işlem hemen yapılır!");