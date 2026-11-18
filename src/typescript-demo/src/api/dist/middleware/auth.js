export const authenticate = (req, res, next) => {
    // Example authentication logic
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send({ error: 'Unauthorized' });
        return;
    }
    // Simulate user extraction from token
    const token = authHeader.split(' ')[1];
    if (token === 'valid-token') {
        req.user = { id: 1, role: 'admin' };
        next();
    }
    else {
        res.status(401).send({ error: 'Unauthorized' });
    }
};
export const authorize = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).send({ error: 'Forbidden' });
            return;
        }
        next();
    };
};
//# sourceMappingURL=auth.js.map