const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // TTL de 10 minutos

const fetchCepInfo = async (cep) => {
    const cachedResponse = cache.get(cep);
    if (cachedResponse) {
        return cachedResponse;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching CEP info:', error);
        throw error;
    }
};

module.exports = { fetchCepInfo };
