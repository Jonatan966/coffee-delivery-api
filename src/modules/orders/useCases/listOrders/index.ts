import { inject, injectable } from 'tsyringe';
import { Order } from '../../infra/typeorm/entities/Order';
import { IOrderRepository } from '../../repositories/IOrderRepository';

@injectable()
class ListOrdersUseCase {
  constructor(
    @inject('OrdersRepository')
    private orderRepository: IOrderRepository
  ) {}

  async execute(): Promise<Order[]> {
    const orders = await this.orderRepository.list();

    return orders;
  }
}

export { ListOrdersUseCase };
