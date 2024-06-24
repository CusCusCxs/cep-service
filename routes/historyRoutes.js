/**
 * @swagger
 * tags:
 *   name: History
 *   description: Consultas e gerenciamento de histórico de consultas de CEP.
 */

/**
 * @swagger
 * /history/size:
 *   get:
 *     summary: Retorna o tamanho atual do arquivo de histórico.
 *     tags: [History]
 *     responses:
 *       '200':
 *         description: Tamanho do arquivo de histórico retornado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sizeBytes:
 *                   type: number
 *                   description: Tamanho do arquivo em bytes.
 *                 sizeKB:
 *                   type: number
 *                   description: Tamanho do arquivo em kilobytes.
 *                 sizeMB:
 *                   type: number
 *                   description: Tamanho do arquivo em megabytes.
 *       '500':
 *         description: Erro ao obter o tamanho do arquivo de histórico.
 */

const express = require('express');
const router = express.Router();
const { getCepQueryHistory, getHistoryFileSize } = require('../controllers/historyController');

router.get('/', getCepQueryHistory); 
router.get('/size', getHistoryFileSize); // Rota para obter o tamanho do arquivo de histórico

module.exports = router;