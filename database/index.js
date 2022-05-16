import db from 'mongoose';
import configs from '../config.js';

function connect() {
  db.connect(configs.DBURL, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// Connexion events
db.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${configs.DBURL}`);
});
db.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

db.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});
export default { connect };
