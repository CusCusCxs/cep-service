const { fetchCepInfo } = require('../services/viaCepService');
const { logCepQuery } = require('../services/historyService');

const getStreetNameByCep = async (req, res) => {
  const cep = req.params.cep;
  try {
    const response = await fetchCepInfo(cep);
    logCepQuery(cep);
    if (response && response.logradouro) {
      res.send(response.logradouro);
    } else {
      res.status(404).send('Logradouro não encontrado para o CEP informado.');
    }
  } catch (error) {
    res.status(500).send('Erro ao consultar o CEP.');
  }
};

module.exports = { getStreetNameByCep };
