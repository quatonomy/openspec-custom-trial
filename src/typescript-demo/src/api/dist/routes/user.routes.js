import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { userSchema } from '../models/user.js';
import { ObjectId } from 'mongodb';
import { connectToMongo } from '../database/mongo.js';
const router = Router();
const db = await connectToMongo();
const users = await db.collection('users');
router.get('/:id', authenticate, authorize(['admin']), async (req, res) => {
    const userId = req.params.id;
    const user = await users.findOne({
        _id: new ObjectId(userId)
    });
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
});
router.post('/', authenticate, authorize(['admin']), async (req, res) => {
    const parsed = userSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).send({ error: parsed.error });
    }
    const newUser = parsed.data;
    const result = await users.insertOne(newUser);
    res.status(201).send({ id: result.insertedId });
});
router.put('/:id', authenticate, authorize(['admin']), async (req, res) => {
});
export default router;
//# sourceMappingURL=user.routes.js.map