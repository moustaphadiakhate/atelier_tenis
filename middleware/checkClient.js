import jwt from 'jsonwebtoken';
import { FORBIDDEN } from '../common/constant.js';
import configs from '../config.js';

const checkClient = (req, res, next) => {
  const token = req.headers.token || req.headers.authorization;

  if (token) {
    jwt.verify(token, configs.SECRET_KEY, (err, payload) => {
      if (!err && configs.apiClient.userName === payload.userName) {
        req.token = payload;
        next();
      } else if (err) {
        res.status(200).json({
          status: 200,
          data: err,
          message: FORBIDDEN,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: { message: `Unknown apiClient with name ${payload.userName}` },
        });
      }
    });
  } else {
    res.status(200).json({
      status: 200,
      message: { message: 'No token provided' },
    });
  }
};

export default checkClient;
