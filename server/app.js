import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { requestLogger, unknownEndpoint } from './src/middleware.js';
import studentsRouter from './src/api/students.js';
import newPdfRouter from './src/api/newPdf.js';

// The Express app
const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/students', studentsRouter);
app.use('/newpdf', newPdfRouter);

app.use(unknownEndpoint);

export default app;
