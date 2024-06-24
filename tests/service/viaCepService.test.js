const axios = require('axios');
const nock = require('nock');
const { fetchCepInfo } = require('./../../services/viaCepService');
const NodeCache = require('node-cache');

describe('fetchCepInfo', () => {
  let cache;
  beforeEach(() => {
    cache = new NodeCache();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  test('returns cached response when CEP is in cache', async () => {
    const cep = '01001000';
    const mockResponse = { cep: '01001-000', logradouro: 'Praça da Sé' };

    // Manually add the response to the cache
    cache.set(cep, mockResponse);

    const data = await fetchCepInfo(cep);
    expect(data).toMatchObject(mockResponse);
  });

  test('throws error when API request fails', async () => {
    const cep = '01001000';

    nock('https://viacep.com.br')
      .get(`/ws/${cep}/json/`)
      .replyWithError('something awful happened');

    await expect(fetchCepInfo(cep)).rejects.toThrow('something awful happened');
  });

});