import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { Order, OrderStatus } from '../../infra/typeorm/entities/Order';
import { IOrderRepository } from '../../repositories/IOrderRepository';

interface IRequest {
  order_id: string;
  new_status: OrderStatus;
}

@injectable()
class UpdateOrderStatusUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrderRepository
  ) {}

  async execute({ order_id, new_status }: IRequest): Promise<Order> {
    const foundedOrder = await this.ordersRepository.findById(order_id);

    if (!foundedOrder) {
      throw new AppError('Order does not exists');
    }

    if (
      [OrderStatus.CANCELED, OrderStatus.DELIVERED].includes(
        foundedOrder.status
      )
    ) {
      throw new AppError('The status of this order can no longer be changed');
    }

    if (foundedOrder.status === new_status) {
      throw new AppError('This status is already set');
    }

    foundedOrder.status = new_status;

    const updatedOrder = await this.ordersRepository.create(foundedOrder);

    return {
      ...foundedOrder,
      ...updatedOrder,
    };
  }
}

export { UpdateOrderStatusUseCase };
