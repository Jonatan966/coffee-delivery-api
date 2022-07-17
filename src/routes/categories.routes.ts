import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensure-authenticate';
import { CreateCategoryController } from '../modules/coffees/useCases/createCategory/controller';
import { ListCategoriesController } from '../modules/coffees/useCases/listCategories/controller';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.post('/', ensureAuthenticate, createCategoryController.handle);
categoriesRouter.get('/', listCategoriesController.handle);

export { categoriesRouter };
