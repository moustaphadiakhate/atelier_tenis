import express from 'express';
import playersRoutes from './players.js';

const router = express.Router();

router.use('/players', playersRoutes);

export default router;
