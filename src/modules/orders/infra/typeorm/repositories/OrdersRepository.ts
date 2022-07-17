import { Repository } from 'typeorm';
import dataSource from '../../../../../shared/database';
import { ICreateOrderDTO } from '../../../dtos/ICreateOrderDTO';
import { IOrderRepository } from '../../../repositories/IOrderRepository';
import { Order } from '../entities/Order';

class OrdersRepository implements IOrderRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = dataSource.getRepository(Order);
  }

  async create({
    id,
    address,
    payment_type,
    total_price = 0,
    status,
  }: ICreateOrderDTO): Promise<Order> {
    const orderObject = this.repository.create({
      id,
      address,
      payment_type,
      total_price,
      status,
    });

    await this.repository.save(orderObject);

    return orderObject;
  }

  async list(): Promise<Order[]> {
    const orders = await this.repository.find();

    return orders;
  }
}

export { OrdersRepository };
