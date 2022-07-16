import { Router } from 'express';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/controller';

const ordersRouter = Router();

const createOrderController = new CreateOrderController();

ordersRouter.post('/', createOrderController.handle);

export { ordersRouter };
