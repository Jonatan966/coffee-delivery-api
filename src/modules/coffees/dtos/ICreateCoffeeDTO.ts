import { Category } from '../infra/typeorm/entities/Category';

interface ICreateCoffeeDTO {
  name: string;
  price: number;
  categories: Category[];
}

export { ICreateCoffeeDTO };
