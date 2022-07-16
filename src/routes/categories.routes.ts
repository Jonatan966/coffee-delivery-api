import { Router } from 'express';
import { CreateCategoryController } from '../modules/coffees/useCases/createCategory/controller';
import { ListCategoriesController } from '../modules/coffees/useCases/listCategories/controller';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.post('/', createCategoryController.handle);
categoriesRouter.get('/', listCategoriesController.handle);

export { categoriesRouter };
