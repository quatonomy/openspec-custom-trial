import type { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: { id: number; role: string};
        }
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
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
    } else {
        res.status(401).send({ error: 'Unauthorized' });
    }
};

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).send({ error: 'Forbidden' });
            return;
        }
        next();
    };
};