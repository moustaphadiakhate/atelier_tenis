import express from 'express';
import {
  getPlayers, getPlayer, getFavCountry, getPlayersIMCMean,
} from '../controllers/player.js';

const router = express.Router();

router.get('/get_players', getPlayers);
router.get('/get_player', getPlayer);
router.get('/get_fav_contry', getFavCountry);
router.get('/get_player_imc_moyen', getPlayersIMCMean);

export default router;
