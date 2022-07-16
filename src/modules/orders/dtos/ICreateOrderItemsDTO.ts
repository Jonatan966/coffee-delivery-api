import { Coffee } from '../../coffees/infra/typeorm/entities/Coffee';

interface ICreateOrderItemsDTO {
  order_id: string;
  items: {
    coffee: Coffee;
    amount: number;
  }[];
}

export { ICreateOrderItemsDTO };
