const express = require('express');
const app = express();
const fs = require('fs');

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para leer el archivo JSON
app.get('/campeonato', (req, res) => {
  fs.readFile('campeonato.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).send('Error al leer el archivo');
      return;
    }

    const campeonatoData = JSON.parse(data);
    res.json(campeonatoData);
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
