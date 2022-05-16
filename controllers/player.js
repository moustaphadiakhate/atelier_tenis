import Player from '../database/models/player.js';

export const getPlayers = (req, res) => {
  Player.find()
    .sort({ 'data.rank': 1 })
    .then((players) => {
      res.status(200).json({
        status: 200,
        data: players,
        message: 'success',
      });
    })
    .catch((err) => {
      console.err(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: 'Error',
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
          message: 'success',
        });
      } else {
        res.status(501).json({
          status: 501,
          data: null,
          message: 'Error',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(501).json({
        status: 501,
        data: null,
        message: 'Error',
      });
    });
};
