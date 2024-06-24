const fs = require('fs');
const path = require('path');
const historyFile = path.join(__dirname, '../../history.json');

const logCepQuery = (cep) => {
  const timestamp = new Date().toISOString();
  const logEntry = { cep, timestamp };

  let history = [];
  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, 'utf-8'));
  }

  history.push(logEntry);
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
};

module.exports = { logCepQuery };
