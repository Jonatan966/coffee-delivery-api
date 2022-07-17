import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepository {
  create(category: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  findByIds(ids: string[]): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>;
}

export { ICategoriesRepository };
