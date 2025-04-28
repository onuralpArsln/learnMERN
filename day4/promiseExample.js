const myPromise = new Promise((resolve, reject) => {
    // 1 saniye sonra başarıyla tamamlanacak bir işlem
    setTimeout(() => {
        resolve("İşlem başarılı!");
    }, 1000);
});

myPromise
    .then((message) => {
        console.log(message);  
        return "Veri geldi"; 
    })
    .then((processedMessage) => {
        console.log(processedMessage);  
        return "Veri kaydedildi";  
    })
    .then((savedMessage) => {
        console.log(savedMessage);  
    });
