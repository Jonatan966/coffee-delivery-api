import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../configs/upload';
import { CreateCoffeeController } from '../modules/coffees/useCases/createCoffee/controller';
import { ListCoffeesController } from '../modules/coffees/useCases/listCoffees/controller';
import { UploadCoffeeImageController } from '../modules/coffees/useCases/uploadCoffeeImage/controller';

const coffeesRouter = Router();

const upload = multer(uploadConfig);

const createCoffeeController = new CreateCoffeeController();
const listCoffeesController = new ListCoffeesController();
const uploadCoffeeImageController = new UploadCoffeeImageController();

coffeesRouter.post('/', createCoffeeController.handle);
coffeesRouter.get('/', listCoffeesController.handle);
coffeesRouter.patch(
  '/:id/image',
  upload.single('coffee_image'),
  uploadCoffeeImageController.handle
);

export { coffeesRouter };
