import { container } from 'tsyringe';

import './providers';

import { CategoriesRepository } from '../../modules/coffees/infra/typeorm/repositories/CategoriesRepository';
import { CoffeesRepository } from '../../modules/coffees/infra/typeorm/repositories/CoffesRepository';
import { ICategoriesRepository } from '../../modules/coffees/repositories/ICategoriesRepository';
import { ICoffeesRepository } from '../../modules/coffees/repositories/ICoffeesRepository';
import { IOrdersRepository } from '../../modules/orders/repositories/IOrdersRepository';
import { OrdersRepository } from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';
import { IOrderItemsRepository } from '../../modules/orders/repositories/IOrderItemsRepository';
import { OrderItemsRepository } from '../../modules/orders/infra/typeorm/repositories/OrderItemsRepository';

container.registerSingleton<ICoffeesRepository>(
  'CoffeesRepository',
  CoffeesRepository
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository
);

container.registerSingleton<IOrderItemsRepository>(
  'OrderItemsRepository',
  OrderItemsRepository
);
