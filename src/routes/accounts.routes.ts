import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/controller';

const accountsRouter = Router();

const createUserController = new CreateUserController();

accountsRouter.post('/', createUserController.handle);

export { accountsRouter };
