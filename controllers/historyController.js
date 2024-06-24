/**
 * @swagger
 * /history/{id}:
 *   get:
 *     summary: Retorna o histórico de uma consulta específica.
 *     description: Obtém o histórico de uma consulta específica usando o ID da consulta.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da consulta.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Histórico da consulta retornado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID da consulta.
 *                 query:
 *                   type: string
 *                   description: Consulta realizada.
 *                 timestamp:
 *                   type: string
 *                   description: Data e hora da consulta.
 *       '404':
 *         description: Consulta não encontrada.
 *       '500':
 *         description: Erro ao obter o histórico da consulta.
 */
const fs = require('fs');
const path = require('path');
const historyFile = path.join(__dirname, '../../history.json');
const MAX_FILE_SIZE_BYTES = 1024 * 1024; // 1MB

const getCepQueryHistory = (req, res) => {
    try {
        if (fs.existsSync(historyFile)) {
            const history = JSON.parse(fs.readFileSync(historyFile, 'utf-8'));
            res.json(history);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error('Error reading history file:', error);
        res.status(500).send('Erro ao recuperar o histórico de consultas.');
    }
};

const checkAndCleanHistoryFile = () => {
    try {
        const stats = fs.statSync(historyFile);
        const fileSizeInBytes = stats.size;

        if (fileSizeInBytes > MAX_FILE_SIZE_BYTES) {
            // Limpar o arquivo de histórico
            fs.writeFileSync(historyFile, '[]');
            console.log('Histórico limpo devido ao tamanho excedido.');
        }
    } catch (error) {
        console.error('Erro ao verificar ou limpar o arquivo de histórico:', error);
    }
};
// Verificar a cada hora
setInterval(checkAndCleanHistoryFile, 60 * 60 * 1000);

const getHistoryFileSize = (req, res) => {
    try {
        const stats = fs.statSync(historyFile);
        const fileSizeInBytes = stats.size;
        const fileSizeInKB = fileSizeInBytes / 1024;
        const fileSizeInMB = fileSizeInKB / 1024;

        res.json({
            sizeBytes: fileSizeInBytes,
            sizeKB: fileSizeInKB,
            sizeMB: fileSizeInMB.toFixed(2) // Limita o número de casas decimais para 2
        });
    } catch (error) {
        console.error('Erro ao obter o tamanho do arquivo de histórico:', error);
        res.status(500).send('Erro ao obter o tamanho do arquivo de histórico.');
    }
};

module.exports = {
    getCepQueryHistory,
    checkAndCleanHistoryFile,
    getHistoryFileSize
};