import { Router } from 'express';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/controller';
import { UpdateOrderStatusController } from '../modules/orders/useCases/updateOrderStatus/controller';

const ordersRouter = Router();

const createOrderController = new CreateOrderController();
const updateOrderStatusController = new UpdateOrderStatusController();

ordersRouter.post('/', createOrderController.handle);
ordersRouter.patch('/:id/status', updateOrderStatusController.handle);

export { ordersRouter };
