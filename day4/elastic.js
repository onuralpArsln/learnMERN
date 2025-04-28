// elastik
//Tokenization
//Skorlama
// sıralama

// 1. Belge veritabanı
const documents = [
    { id: 1, title: "Elma ve Armut", content: "Elmalar çok sağlıklıdır. Elmalar güzeldir." },
    { id: 2, title: "Meyve Dünyası", content: "Armut, elmaya göre daha tatlıdır. Armut çok yenir." },
    { id: 3, title: "Sebze Bahçesi", content: "Domates, biber ve patlıcan birer sebzedir." },
];

// 2. Tokenizer: metni küçük harfe çevirip kelimelere ayırır
function tokenize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-zçğıöşü0-9\s]/gi, '') // Noktalama temizle
        .split(/\s+/); // Boşluklara göre böl
}

// 3. Levenshtein mesafe hesaplama (fuzzy search için)
function levenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 0; j <= b.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,     // Silme
                    matrix[i][j - 1] + 1,     // Ekleme
                    matrix[i - 1][j - 1] + 1  // Değiştirme
                );
            }
        }
    }
    return matrix[a.length][b.length];
}

// 4. Fuzzy eşleşme kontrolü
function isFuzzyMatch(word1, word2) {
    const distance = levenshtein(word1, word2);
    return distance <= 1; // 1 veya daha az uzaklıkta ise eşleşmiş kabul
}

// 5. Gelişmiş arama fonksiyonu
function searchDocuments(query) {
    const queryTokens = tokenize(query);

    const results = documents.map(doc => {
        const allText = `${doc.title} ${doc.content}`;
        const docTokens = tokenize(allText);

        // Skor hesapla
        let score = 0;
        for (const token of queryTokens) {
            for (const docToken of docTokens) {
                if (isFuzzyMatch(token, docToken)) {
                    score++;
                }
            }
        }

        return { ...doc, score };
    });

    // Skoru 0'dan büyük olanları al, skora göre sırala
    return results
        .filter(doc => doc.score > 0)
        .sort((a, b) => b.score - a.score);
}

// 6. Kullanım örneği
const searchResult = searchDocuments("elmaa armutt");

console.log("Arama Sonuçları:", searchResult);