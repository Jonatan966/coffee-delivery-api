import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import './shared/container';

import { createConnection } from './shared/database';
import { router } from './routes';
import { errorHandler } from './middlewares/error-handler';

createConnection().then(() => console.log('[database] connected successful'));

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(3333, () => console.log('working'));
