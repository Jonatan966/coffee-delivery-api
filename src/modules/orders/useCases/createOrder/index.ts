import { inject, injectable } from 'tsyringe';
import { ICoffeesRepository } from '../../../coffees/repositories/ICoffeesRepository';
import { Order, PaymentType } from '../../infra/typeorm/entities/Order';
import { IOrderItemsRepository } from '../../repositories/IOrderItemsRepository';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

interface IRequest {
  address: string;
  payment_type: PaymentType;
  items: {
    coffee_id: string;
    amount: number;
  }[];
}

@injectable()
class CreateOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private orderRepository: IOrdersRepository,
    @inject('OrderItemsRepository')
    private orderItemRepository: IOrderItemsRepository,
    @inject('CoffeesRepository')
    private coffeeRepository: ICoffeesRepository
  ) {}

  async execute({ address, payment_type, items }: IRequest): Promise<Order> {
    const mappedItems = items.reduce<Record<string, number>>((acc, item) => {
      acc[item.coffee_id] = item.amount;

      return acc;
    }, {});

    const coffees = await this.coffeeRepository.findByIds(
      Object.keys(mappedItems)
    );

    let totalPrice = 0;

    const itemsObject = coffees.map((coffee) => {
      const amount = mappedItems[coffee.id];

      totalPrice += amount * coffee.price;

      return {
        coffee,
        amount,
      };
    });

    const createdOrder = await this.orderRepository.create({
      address,
      payment_type,
      total_price: totalPrice,
    });

    const createdOrderItems = await this.orderItemRepository.createMany({
      order_id: createdOrder.id,
      items: itemsObject,
    });

    return {
      ...createdOrder,
      order_items: createdOrderItems,
    };
  }
}

export { CreateOrderUseCase };
