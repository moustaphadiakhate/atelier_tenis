import express from 'express';
import { getPlayers, getPlayer } from '../controllers/player.js';

const router = express.Router();

router.get('/get_players', getPlayers);
router.get('/get_player', getPlayer);

export default router;
