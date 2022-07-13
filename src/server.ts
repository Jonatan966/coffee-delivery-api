import 'reflect-metadata';
import express from 'express';
import { createConnection } from './shared/database';

createConnection().then(() => console.log('[database] connected successful'));

const app = express();

app.use(express.json());

app.listen(3333, () => console.log('working'));
