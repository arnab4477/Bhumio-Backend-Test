import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { requestLogger, unknownEndpoint } from './src/middleware';

// The Express app
const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);
app.use(unknownEndpoint);

export default app;
