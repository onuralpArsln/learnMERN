const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();

const SECRET_KEY = 'supaSecretCode';
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});



app.get('/secret', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'secret.html'));
});

// API: Token üret
app.post('/api/login', (req, res) => {
    const user = { id: 1, name: 'Alp' };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// API: Gizli bilgi (token ister)
app.get('/api/secret', (req, res) => {
    const authHeader = req.headers['authorization'];  // token varsa requestin headerında authta olacak
    const token = authHeader?.split(' ')[1]; // bu soru işareti eğer undefined bir değer ise çökme undefined der

    if (!token) return res.status(401).json({ message: 'Token yok' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token geçersiz' });
        res.json({ secret: ' gizli veri' });
    });
});

app.listen(3000, () => console.log('http://localhost:3000'));
