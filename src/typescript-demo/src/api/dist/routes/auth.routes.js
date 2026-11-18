import { Router } from 'express';
const router = Router();
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.status(200).json({ token: 'valid-token' });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
export default router;
//# sourceMappingURL=auth.routes.js.map