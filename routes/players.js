import express from 'express';
import { getPlayers, getPlayer, getFavCountry } from '../controllers/player.js';

const router = express.Router();

router.get('/get_players', getPlayers);
router.get('/get_player', getPlayer);
router.get('/get_fav_contry', getFavCountry);

export default router;
