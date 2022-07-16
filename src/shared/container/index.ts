import { container } from 'tsyringe';

import './providers';

import { CategoriesRepository } from '../../modules/coffees/infra/typeorm/repositories/CategoriesRepository';
import { CoffeesRepository } from '../../modules/coffees/infra/typeorm/repositories/CoffesRepository';
import { ICategoryRepository } from '../../modules/coffees/repositories/ICategoryRepository';
import { ICoffeeRepository } from '../../modules/coffees/repositories/ICoffeeRepository';
import { IOrderRepository } from '../../modules/orders/repositories/IOrderRepository';
import { OrdersRepository } from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';
import { IOrderItemRepository } from '../../modules/orders/repositories/IOrderItemRepository';
import { OrderItemsRepository } from '../../modules/orders/infra/typeorm/repositories/OrderItemsRepository';

container.registerSingleton<ICoffeeRepository>(
  'CoffeesRepository',
  CoffeesRepository
);

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IOrderRepository>(
  'OrdersRepository',
  OrdersRepository
);

container.registerSingleton<IOrderItemRepository>(
  'OrderItemsRepository',
  OrderItemsRepository
);
