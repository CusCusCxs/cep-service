const validateCep = (req, res, next) => {
    const cep = req.params.cep;
    const cepRegex = /^[0-9]{8}$/; // Regex para validar o formato do CEP (8 dígitos)
  
    if (!cepRegex.test(cep)) {
      return res.status(400).send('CEP inválido. O CEP deve conter 8 dígitos.');
    }
  
    next();
  };
  
  module.exports = validateCep;