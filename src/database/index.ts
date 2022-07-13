import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://coffee:delivery@localhost/coffee_delivery',
});

export function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;
