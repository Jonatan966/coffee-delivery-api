import { ICreateOrderItemsDTO } from '../dtos/ICreateOrderItemsDTO';
import { OrderItem } from '../infra/typeorm/entities/OrderItem';

interface IOrderItemsRepository {
  createMany(orderItem: ICreateOrderItemsDTO): Promise<OrderItem[]>;
}

export { IOrderItemsRepository };
