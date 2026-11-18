import { Router } from 'express';
import type { Request, Response } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import type { CustomerRequest } from '../httpModels/customerRequest.js';

const router = Router();

router.post('/string', authenticate, authorize(['admin']), (req: Request, res: Response) => {
  const [message, status] = requestReflection<string>(req.body);
  res.status(status).send({ message });
});

router.post('/number', authenticate, authorize(['admin']), (req: Request, res: Response) => {
  const [message, status] = requestReflection<number>(req.body);
  res.status(status).send({ message });
});

function requestReflection<T>(value: object): [message: string, status: number] {
  const jsonAsString = JSON.stringify(value);
  let requestBody: CustomerRequest<T>;

  try {
    requestBody= JSON.parse(jsonAsString) as CustomerRequest<T>;
  }
  catch (e) {
    return [`Invalid JSON: ${e}`, 400];
  }
  
  return [`This is the ${typeof requestBody.test} you sent: ${requestBody.test}`, 201];
}

export default router;