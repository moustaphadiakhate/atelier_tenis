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
          message: 'Success',
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
            ratio: mean(countries[country]),
          });
        }
        list.sort((a, b) => b.ratio - a.ratio);
        res.status(200).json({
          status: 200,
          data: list[0],
          message: 'Success',
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

export const getPlayersIMCMean = (req, res) => {
  Player.find()
    .sort({ 'data.rank': 1 })
    .then((players) => {
      const imcList = players.map((player) => {
        const { weight, height } = player.data;
        return (weight / 1000) / (height / 100) ** 2;
      });

      const playersIMC = mean(imcList);
      res.status(200).json({
        status: 200,
        data: playersIMC.toFixed(2),
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

// private functions

/**
 * It takes an array of numbers, adds them up, and returns the mean.
 * @param numbers - An array of numbers.
 * @returns The average of the numbers in the array.
 */
function mean(numbers) {
  let total = 0; let
    i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
}
