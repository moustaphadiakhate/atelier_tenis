import { expect } from 'chai';
import request from 'supertest';

import server from '../app.js';

const app = request.agent(server);

// Test for Root test api
describe('Atelier Tenis test api', () => {
  it('Result should return success', () => {
    app.get('/').end((err, res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('Getting the players sorted by rank', () => {
    app.get('/v0/players/get_players').end((err, res) => {
      expect(res.body.data).to.be.an('array');
    });
  });

  it('Getting a player with no id', () => {
    app.get('/v0/players/get_player').end((err, res) => {
      expect(res.status).to.equal(422);
      expect(res.body.data).to.be.an('array');
      expect(res.body.message).to.equal('validateError');
      expect(res.body.data).to.be.has.lengthOf(1);
    });
  });

  it('Getting a player with no exists id', () => {
    app.get('/v0/players/get_player?id=001x').end((err, res) => {
      expect(res.status).to.equal(501);
    });
  });

  it('Getting a player with valid id', () => {
    app.get('/v0/players/get_players?id=52').end((err, res) => {
      if (res.status === 200) {
        expect(res.status).to.equal(200);
      }
    });
  });

  it('Getting favory contry by ratio', () => {
    app.get('/v0/players/get_fav_contry').end((err, res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('Getting players imc mean', () => {
    app.get('/v0/players/get_player_imc_moyen').end((err, res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('Getting players height median', () => {
    app.get('/v0/players/get_heigth_median').end((err, res) => {
      expect(res.status).to.equal(200);
    });
  });
});
