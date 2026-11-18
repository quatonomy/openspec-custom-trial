import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { connectToMongo } from '../database/mongo.js';
const router = Router();
const db = await connectToMongo();
const users = await db.collection('users');
router.get('/', authenticate, authorize(['admin']), async (req, res) => {
    const allUsers = await users.find().toArray();
    res.status(200).send(allUsers);
});
export default router;
//# sourceMappingURL=users.routes.js.map