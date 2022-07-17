import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/controller';
import { CreateUserController } from '../modules/accounts/useCases/createUser/controller';

const accountsRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

accountsRouter.post('/', createUserController.handle);
accountsRouter.post('/authenticate', authenticateUserController.handle);

export { accountsRouter };
