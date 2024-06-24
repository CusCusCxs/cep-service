const express = require('express');
const app = express();
const cepRoutes = require('./routes/cepRoutes');
const historyRoutes = require('./routes/historyRoutes'); // Certifique-se de importar as rotas de histórico
const { checkAndCleanHistoryFile } = require('./controllers/historyController');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');

// Middleware para servir a documentação Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para verificar e limpar o arquivo de histórico ao iniciar o servidor
checkAndCleanHistoryFile();

app.use('/cep', cepRoutes);
app.use('/history', historyRoutes); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
