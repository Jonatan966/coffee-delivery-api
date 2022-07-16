import { ICreateOrderItemsDTO } from '../dtos/ICreateOrderItemsDTO';
import { OrderItem } from '../infra/typeorm/entities/OrderItem';

interface IOrderItemRepository {
  createMany(orderItem: ICreateOrderItemsDTO): Promise<OrderItem[]>;
}

export { IOrderItemRepository };
