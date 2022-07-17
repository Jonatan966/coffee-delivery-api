import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensure-authenticate';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/controller';
import { ListOrdersController } from '../modules/orders/useCases/listOrders/controller';
import { ShowOrderController } from '../modules/orders/useCases/showOrder/controller';
import { UpdateOrderStatusController } from '../modules/orders/useCases/updateOrderStatus/controller';

const ordersRouter = Router();

const createOrderController = new CreateOrderController();
const updateOrderStatusController = new UpdateOrderStatusController();
const listOrdersController = new ListOrdersController();
const showOrderController = new ShowOrderController();

ordersRouter.post('/', createOrderController.handle);

ordersRouter.use(ensureAuthenticate);

ordersRouter.patch('/:id/status', updateOrderStatusController.handle);
ordersRouter.get('/', listOrdersController.handle);
ordersRouter.get('/:id', showOrderController.handle);

export { ordersRouter };
