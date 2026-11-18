import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
const router = Router();
router.post('/string', authenticate, authorize(['admin']), (req, res) => {
    const [message, status] = requestReflection(req.body);
    res.status(status).send({ message });
});
router.post('/number', authenticate, authorize(['admin']), (req, res) => {
    const [message, status] = requestReflection(req.body);
    res.status(status).send({ message });
});
function requestReflection(value) {
    const jsonAsString = JSON.stringify(value);
    let requestBody;
    try {
        requestBody = JSON.parse(jsonAsString);
    }
    catch (e) {
        return [`Invalid JSON: ${e}`, 400];
    }
    return [`This is the ${typeof requestBody.test} you sent: ${requestBody.test}`, 201];
}
export default router;
//# sourceMappingURL=reflection.routes.js.map