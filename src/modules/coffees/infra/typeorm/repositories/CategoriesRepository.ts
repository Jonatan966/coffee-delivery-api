import { In, Repository } from 'typeorm';
import dataSource from '../../../../../shared/database';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const categoryObject = this.repository.create({
      name,
    });

    await this.repository.save(categoryObject);

    return categoryObject;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByIds(ids: string[]): Promise<Category[]> {
    const foundedCategories = await this.repository.findBy({ id: In(ids) });

    return foundedCategories;
  }

  async findByName(name: string): Promise<Category> {
    const foundedCategory = await this.repository.findOneBy({ name });

    return foundedCategory;
  }
}

export { CategoriesRepository };
