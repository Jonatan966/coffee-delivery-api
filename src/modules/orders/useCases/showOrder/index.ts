import { inject, injectable } from 'tsyringe';
import { Order } from '../../infra/typeorm/entities/Order';
import { IOrderRepository } from '../../repositories/IOrderRepository';

@injectable()
class ShowOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private orderRepository: IOrderRepository
  ) {}

  async execute(order_id: string): Promise<Order> {
    const foundedOrder = await this.orderRepository.findById(order_id);

    return foundedOrder;
  }
}

export { ShowOrderUseCase };
