import mongoose from 'mongoose';
import { createRequire } from 'module';
import configs from '../configs.js';
import Player from '../database/models/player.js';

const require = createRequire(import.meta.url);
const dataset = require('../data/dataset.json');

mongoose.connect(configs.DBURL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
  }
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to seed: ${configs.DBURL}`);
  mongoose.connection.db.dropCollection('players', () => {
    dataset.players.forEach(async (p, index) => {
      const player = new Player(p);
      await player.save(() => {
        if (index === dataset.players.length - 1) {
          console.log(`Mongoose connection closed seeding : ${configs.DBURL} finised`);
          mongoose.disconnect();
        }
      });
    });
  });
});
