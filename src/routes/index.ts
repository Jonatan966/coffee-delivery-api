import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { coffeesRouter } from './coffees.routes';
import { ordersRouter } from './orders.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/coffees', coffeesRouter);
router.use('/orders', ordersRouter);

export { router };
