const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Servindo arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('src'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index_gpt.html');
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

app.get('/full', (req, res) => {
  const filePath = path.join(__dirname, 'index_gpt.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    res.send(data);
  });
});

app.get('/timeline', (req, res) => {
  const filePath = path.join(__dirname, 'index_timeline.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    res.send(data);
  });
});

app.get('/timeline_V1', (req, res) => {
  const filePath = path.join(__dirname, 'index_timeline_v1.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    res.send(data);
  });
});

app.get('/timeline_V2', (req, res) => {
  const filePath = path.join(__dirname, 'index_timeline_v2.html');
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
