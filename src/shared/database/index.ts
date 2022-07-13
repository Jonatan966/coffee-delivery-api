import { DataSource } from 'typeorm';

import { Coffee } from '../../modules/coffees/infra/typeorm/entities/Coffee';
import { CreateCoffeesTable1657675660015 } from './migrations/1657675660015-CreateCoffeesTable';

const dataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://coffee:delivery@localhost/coffee_delivery',
  migrations: [CreateCoffeesTable1657675660015],
  entities: [Coffee],
});

export function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;
