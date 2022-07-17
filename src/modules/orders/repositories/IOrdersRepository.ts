import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { Order } from '../infra/typeorm/entities/Order';

interface IOrdersRepository {
  create(order: ICreateOrderDTO): Promise<Order>;
  list(withItems?: boolean): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
}

export { IOrdersRepository };
