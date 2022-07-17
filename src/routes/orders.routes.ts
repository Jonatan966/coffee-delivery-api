import { Router } from 'express';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/controller';
import { ListOrdersController } from '../modules/orders/useCases/listOrders/controller';
import { UpdateOrderStatusController } from '../modules/orders/useCases/updateOrderStatus/controller';

const ordersRouter = Router();

const createOrderController = new CreateOrderController();
const updateOrderStatusController = new UpdateOrderStatusController();
const listOrdersController = new ListOrdersController();

ordersRouter.post('/', createOrderController.handle);
ordersRouter.patch('/:id/status', updateOrderStatusController.handle);
ordersRouter.get('/', listOrdersController.handle);

export { ordersRouter };
