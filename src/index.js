const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Servindo arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('src'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index_full.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    res.send(data);
  });
});

app.get('/short', (req, res) => {
  const filePath = path.join(__dirname, 'index_short.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
