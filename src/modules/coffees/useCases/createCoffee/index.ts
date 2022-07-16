import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { Coffee } from '../../infra/typeorm/entities/Coffee';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';
import { ICoffeeRepository } from '../../repositories/ICoffeeRepository';

interface IRequest {
  name: string;
  price: number;
  categories_id: string[];
}

@injectable()
class CreateCoffeeUseCase {
  constructor(
    @inject('CoffeesRepository')
    private coffeesRepository: ICoffeeRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute({ name, price, categories_id }: IRequest): Promise<Coffee> {
    const categories = await this.categoriesRepository.findByIds(categories_id);

    if (!categories.length) {
      throw new AppError('Categories does not exists');
    }

    const createdCoffee = await this.coffeesRepository.create({
      name,
      price,
      categories,
    });

    return createdCoffee;
  }
}

export { CreateCoffeeUseCase };
