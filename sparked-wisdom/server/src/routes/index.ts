import { Router } from 'express';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
import aputhRoutes from './auth-routes.js';

const router = Router();

router.use('/api', apiRoutes);
router.use('/api', authenticateToken, apiRoutes);

export default router;
