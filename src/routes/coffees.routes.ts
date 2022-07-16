import { Router } from 'express';
import { CreateCoffeeController } from '../modules/coffees/useCases/createCoffee/controller';
import { ListCoffeesController } from '../modules/coffees/useCases/listCoffees/controller';

const coffeesRouter = Router();

const createCoffeeController = new CreateCoffeeController();
const listCoffeesController = new ListCoffeesController();

coffeesRouter.post('/', createCoffeeController.handle);
coffeesRouter.get('/', listCoffeesController.handle);

export { coffeesRouter };
