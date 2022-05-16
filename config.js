import dotenv from 'dotenv';

dotenv.config();

async function envenHandler({ code, message }) {
  if (code === 0) {
    console.error(message);
    // TODO : wait some seconds (send alerts to our ALTELIER SERVERS alert HOOKS) before EXIT
    process.exit(code);
  }
}
process.on('uncaughtException', (err) => {
  const event = {
    code: 1,
    message: `\n\n ${err.message}\n ${err.stack}`,
  };
  envenHandler(event);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at promise:');
  console.error(promise);
  console.error(reason.stack);
});

process.on('SIGINT', () => {
  envenHandler({
    code: 0,
    message: 'SIGINT received',
  });
});

process.on('SIGTERM', () => {
  envenHandler({
    code: 0,
    message: 'SIGTERM received',
  });
});

process.on('SIGINT', () => {
  envenHandler({
    code: 0,
    message: 'SIGINT received',
  });
});

const configs = {
  env: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DBURL: process.env.DB_URL,
  SECRET_KEY: '00_kepp_secret_atelier_tenis_2022',
  appName: 'atelier_tenis',
  apiClient: {
    userName: 'player01',
  },
};

export default configs;
