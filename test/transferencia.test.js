const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferencias', () => {
  let token;

  beforeEach(async () => {
    token = await obterToken('julio.lima', '123456');
  });

  describe('POST /transferencias', () => {
    it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou maior que 10', async () => {
      const bodyTransferencias = { ...postTransferencias };

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha com 422 quando o valor da transferencia for abaixo de 10', async () => {
      const bodyTransferencias = { ...postTransferencias };
      bodyTransferencias.valor = 7;

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(422);
    });
  });

  describe('GET /transferencias/:id', () => {
    it('Deve retornar sucesso com 200 quando o id for válido', async () => {
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias/35')
        .set('Authorization', `Bearer ${token}`);

      expect(resposta.status).to.equal(200);
      expect(resposta.text).to.equal('');
    });
  });

  describe('GET /transferencias', () => {
    it('Deve retornar no máximo 10 elementos na paginação quando informar limite de 10 registros', async () => {
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias?page=1&limit=10')
        .set('Authorization', `Bearer ${token}`);

      expect(resposta.status).to.equal(200);
      expect(resposta.body.limit).to.equal(10);
      expect(resposta.body.transferencias.length).to.be.at.most(10);
    });
  });
});