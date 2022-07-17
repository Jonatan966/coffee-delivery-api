import { inject, injectable } from 'tsyringe';
import { Order } from '../../infra/typeorm/entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class ListOrdersUseCase {
  constructor(
    @inject('OrdersRepository')
    private orderRepository: IOrdersRepository
  ) {}

  async execute(): Promise<Order[]> {
    const orders = await this.orderRepository.list();

    return orders;
  }
}

export { ListOrdersUseCase };
