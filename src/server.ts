import 'reflect-metadata';
import './shared/container';

import express from 'express';

import { createConnection } from './shared/database';
import { router } from './routes';

createConnection().then(() => console.log('[database] connected successful'));

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('working'));
