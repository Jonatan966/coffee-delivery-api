import { Router } from 'express';
import { accountsRouter } from './accounts.routes';
import { categoriesRouter } from './categories.routes';
import { coffeesRouter } from './coffees.routes';
import { ordersRouter } from './orders.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/coffees', coffeesRouter);
router.use('/orders', ordersRouter);
router.use('/users', accountsRouter);

export { router };
