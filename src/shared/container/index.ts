import { container } from 'tsyringe';

import { CategoriesRepository } from '../../modules/coffees/infra/typeorm/repositories/CategoriesRepository';
import { CoffeesRepository } from '../../modules/coffees/infra/typeorm/repositories/CoffesRepository';
import { ICategoryRepository } from '../../modules/coffees/repositories/ICategoryRepository';
import { ICoffeeRepository } from '../../modules/coffees/repositories/ICoffeeRepository';

container.registerSingleton<ICoffeeRepository>(
  'CoffeesRepository',
  CoffeesRepository
);

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository
);
