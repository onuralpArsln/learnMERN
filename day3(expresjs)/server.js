const express = require('express');
const app = express();
const PORT = 3000;

//  Basit bir API endpoint
app.get('/api/selam', (req, res) => {
    res.json({ mesaj: 'Selam' });
});

// HTML sayfası döndürme
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor http://localhost:${PORT}`);
});
