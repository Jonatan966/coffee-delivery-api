import { Repository } from 'typeorm';
import dataSource from '../../../../../shared/database';
import { ICreateOrderItemsDTO } from '../../../dtos/ICreateOrderItemsDTO';
import { IOrderItemRepository } from '../../../repositories/IOrderItemRepository';
import { OrderItem } from '../entities/OrderItem';

class OrderItemsRepository implements IOrderItemRepository {
  private repository: Repository<OrderItem>;

  constructor() {
    this.repository = dataSource.getRepository(OrderItem);
  }

  async createMany({
    order_id,
    items,
  }: ICreateOrderItemsDTO): Promise<OrderItem[]> {
    const orderItemObjects = this.repository.create(
      items.map((orderItem) => ({
        ...orderItem,
        order_id,
        partial_price: orderItem.coffee.price * orderItem.amount,
      }))
    );

    await this.repository.save(orderItemObjects);

    return orderItemObjects;
  }
}

export { OrderItemsRepository };
