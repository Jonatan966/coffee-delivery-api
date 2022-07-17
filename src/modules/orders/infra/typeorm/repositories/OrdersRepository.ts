import { Repository } from 'typeorm';
import dataSource from '../../../../../shared/database';
import { ICreateOrderDTO } from '../../../dtos/ICreateOrderDTO';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';
import { Order } from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
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

  async list(withItems = false): Promise<Order[]> {
    const orders = await this.repository.find({
      relations: withItems && ['order_items'],
    });

    return orders;
  }

  async findById(id: string): Promise<Order | null> {
    const foundedOrder = await this.repository.findOne({
      relations: ['order_items'],
      where: { id },
    });

    return foundedOrder;
  }
}

export { OrdersRepository };
