import { Router } from 'express';
import reflectionRoutes from './reflection.routes.js';
import usersRoutes from './users.routes.js';
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

router.use('/api', reflectionRoutes);
router.use('/api/users', usersRoutes);
router.use('/api/user', userRoutes);
router.use('/api/auth', authRoutes);

export default router;
