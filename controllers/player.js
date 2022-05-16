import Player from '../database/models/player.js';
import { getMean, getMedian } from '../helpers/statistics.js';
import { SUCCESS, INTERNAL_SERVER_ERROR, ERROR } from '../common/constant.js';

export const getPlayers = (req, res) => {
  Player.find()
    .sort({ 'data.rank': 1 })
    .then((players) => {
      res.status(200).json({
        status: 200,
        data: players,
        message: SUCCESS,
      });
    })
    .catch((err) => {
      console.err(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: INTERNAL_SERVER_ERROR,
      });
    });
};

export const getPlayer = (req, res) => {
  const reqBody = {
    id: req.query.id,
  };

  Player.findOne({ id: reqBody.id })
    .then((player) => {
      if (player) {
        res.status(200).json({
          status: 200,
          data: player,
          message: SUCCESS,
        });
      } else {
        res.status(501).json({
          status: 501,
          data: null,
          message: ERROR,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: INTERNAL_SERVER_ERROR,
      });
    });
};

export const getFavCountry = (req, res) => {
  Player.find()
    .then((players) => {
      const list = [];
      const countries = {};
      if (players && players.length) {
        for (const player of players) {
          const { code } = player.country;
          if (countries[code]) {
            countries[code] = countries[code].concat(player.data.last);
          } else {
            countries[code] = player.data.last;
          }
        }
        for (const country in countries) {
          list.push({
            code: country,
            ratio: getMean(countries[country]),
          });
        }
        list.sort((a, b) => b.ratio - a.ratio);
        res.status(200).json({
          status: 200,
          data: list[0],
          message: SUCCESS,
        });
      } else {
        res.status(501).json({
          status: 501,
          data: null,
          message: ERROR,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: INTERNAL_SERVER_ERROR,
      });
    });
};

export const getPlayersIMCMean = (req, res) => {
  Player.find()
    .sort({ 'data.rank': 1 })
    .then((players) => {
      const imcList = players.map((player) => {
        const { weight, height } = player.data;
        return (weight / 1000) / (height / 100) ** 2;
      });

      const playersIMC = getMean(imcList);
      res.status(200).json({
        status: 200,
        data: playersIMC.toFixed(2),
        message: SUCCESS,
      });
    })
    .catch((err) => {
      console.err(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: INTERNAL_SERVER_ERROR,
      });
    });
};

export const getPlayersHeighMedian = (req, res) => {
  Player.find()
    .sort({ 'data.rank': 1 })
    .then((players) => {
      const heightList = players.map((player) => player.data.height);
      const playersHeighMedian = getMedian(heightList);
      res.status(200).json({
        status: 200,
        data: playersHeighMedian.toFixed(2),
        message: SUCCESS,
      });
    })
    .catch((err) => {
      console.err(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: INTERNAL_SERVER_ERROR,
      });
    });
};
