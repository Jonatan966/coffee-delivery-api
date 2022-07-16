import { ICreateCoffeeDTO } from '../dtos/ICreateCoffeeDTO';
import { Coffee } from '../infra/typeorm/entities/Coffee';

interface ICoffeeRepository {
  create(coffee: ICreateCoffeeDTO): Promise<Coffee>;
  findById(id: string): Promise<Coffee | null>;
  findByIds(ids: string[]): Promise<Coffee[]>;
  list(): Promise<Coffee[]>;
}

export { ICoffeeRepository };
