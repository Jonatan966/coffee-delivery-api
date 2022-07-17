import { DataSource } from 'typeorm';

import { Coffee } from '../../modules/coffees/infra/typeorm/entities/Coffee';
import { Category } from '../../modules/coffees/infra/typeorm/entities/Category';
import { Order } from '../../modules/orders/infra/typeorm/entities/Order';
import { OrderItem } from '../../modules/orders/infra/typeorm/entities/OrderItem';

import { CreateCoffeesTable1657675660015 } from './migrations/1657675660015-CreateCoffeesTable';
import { CreateCategoriesTable1657844097712 } from './migrations/1657844097712-CreateCategoriesTable';
import { CreateCoffeeCategoriesTable1657844513864 } from './migrations/1657844513864-CreateCoffeeCategoriesTable';
import { CreateOrdersTable1657999339706 } from './migrations/1657999339706-CreateOrdersTable';
import { CreateOrderItemsTable1658000011794 } from './migrations/1658000011794-CreateOrderItemsTable';
import { ChangePriceTypes1658013052510 } from './migrations/1658013052510-ChangePriceTypes';
import { AddOrderStatus1658021076703 } from './migrations/1658021076703-AddOrderStatus';

const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrations: [
    CreateCoffeesTable1657675660015,
    CreateCategoriesTable1657844097712,
    CreateCoffeeCategoriesTable1657844513864,
    CreateOrdersTable1657999339706,
    CreateOrderItemsTable1658000011794,
    ChangePriceTypes1658013052510,
    AddOrderStatus1658021076703,
  ],
  entities: [Coffee, Category, Order, OrderItem],
});

export function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;
