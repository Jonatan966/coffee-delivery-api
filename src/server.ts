import 'reflect-metadata';
import 'dotenv/config';

import swaggerUI from 'swagger-ui-express';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './shared/container';

import { createConnection } from './shared/database';
import { router } from './routes';
import { errorHandler } from './middlewares/error-handler';
import swaggerFile from './swagger.json';

createConnection().then(() => console.log('[database] connected successful'));

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log('working'));
