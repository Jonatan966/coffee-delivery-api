import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { Order } from '../infra/typeorm/entities/Order';

interface IOrderRepository {
  create(order: ICreateOrderDTO): Promise<Order>;
  list(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
}

export { IOrderRepository };
