const swaggerJSDoc = require('swagger-jsdoc');

// Definição básica do Swagger JSDoc
const swaggerDefinition = {
  openapi: '3.0.0', // Versão do OpenAPI
  info: {
    title: 'CEP Service API', // Título da API
    version: '1.0.0', // Versão da API
    description: 'API para consulta de CEP e gerenciamento de histórico de consultas.'
  },
  servers: [
    {
      url: 'http://localhost:8080', // URL base da API
      description: 'Servidor local'
    }
    // Adicione mais servers conforme necessário
  ]
};

// Opções do Swagger JSDoc
const options = {
  swaggerDefinition,
  // Listagem de arquivos que contêm documentação JSDoc
  apis: ['./routes/*.js', './controllers/*.js']
};

// Inicialização do Swagger JSDoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;