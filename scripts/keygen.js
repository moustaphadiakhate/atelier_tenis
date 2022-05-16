import jwt from 'jsonwebtoken';
import configs from '../config.js';

const payload = { userName: configs.apiClient.userName };

const response = {
  token: jwt.sign(payload, configs.SECRET_KEY),
};
console.log(response);
