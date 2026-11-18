import bodyParser from 'body-parser';
import express from 'express';
import type { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.get('/api/health', (req: Request, res: Response) => {
  res.send({ status: 'ok', uniqueIdentifier: randomUUID() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});