const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use(express.json());  // to use json

app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// expects a post 
app.post('/api/datainput', async (req, res) => {

    const { username, email } = req.body;

    console.log('Received:', req.body);

    /*
  
      try {
          await client.connect();
          const db = client.db("testDB"); // creates if not exists
          const users = db.collection("users");
  
          const result = await users.insertMany([
              {
                  kayitadi: kayitadi,
                  aySayisi: aySayisi,
                  aylikOdeme: aylikOdeme,
                  baslangicTarihi: baslangicTarihi,
                  formid: paymentId
              },
  
          ]);
  
          console.log(`${result.insertedCount} documents inserted.`);
      } catch (err) {
          console.error(err);
      } finally {
          await client.close();
      }
  */
    res.json({
        message: 'veri alındı',
        data: { username, email }
    });
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
