import dotenv from 'dotenv';

dotenv.config();

const configs = {
  PORT: process.env.PORT,
  DBURL: process.env.DB_URL,
  SECRET_KEY: '00_kepp_secret_atelier_tenis_2022',
  appName: 'atelier_tenis',
  env: process.env.NODE_ENV,
  apiClient: {
    userName: 'player01',
  },
};

export default configs;
