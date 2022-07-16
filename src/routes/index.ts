import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { coffeesRouter } from './coffees.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/coffees', coffeesRouter);

export { router };
