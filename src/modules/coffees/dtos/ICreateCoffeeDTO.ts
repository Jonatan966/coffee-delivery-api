import { Category } from '../infra/typeorm/entities/Category';

interface ICreateCoffeeDTO {
  id?: string;
  image_url?: string;
  name: string;
  price: number;
  categories: Category[];
}

export { ICreateCoffeeDTO };
