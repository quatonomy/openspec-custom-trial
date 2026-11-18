import bodyParser from 'body-parser';
import express from 'express';
import { authenticate, authorize } from './middleware/auth.js';
import { CustomerRequest } from './httpModels/customerRequest.js';
import { userSchema } from './models/user.js';
import { connectToMongo } from './database/mongo.js';
import { ObjectId } from 'mongodb';
import { randomUUID } from 'node:crypto';
import routes from './routes/index.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
const PORT = process.env.PORT || 3000;
app.get('/api/health', (req, res) => {
    res.send({ status: 'ok', uniqueIdentifier: randomUUID() });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map