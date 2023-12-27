const fs = require('fs');

// Leer el archivo JSON
fs.readFile('campeonato.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const campeonatoData = JSON.parse(data);
  console.log('Datos del campeonato:', campeonatoData);
});
