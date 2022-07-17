import { inject, injectable } from 'tsyringe';
import { Order } from '../../infra/typeorm/entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class ShowOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private orderRepository: IOrdersRepository
  ) {}

  async execute(order_id: string): Promise<Order> {
    const foundedOrder = await this.orderRepository.findById(order_id);

    return foundedOrder;
  }
}

export { ShowOrderUseCase };
