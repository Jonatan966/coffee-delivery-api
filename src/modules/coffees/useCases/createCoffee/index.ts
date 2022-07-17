import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { Coffee } from '../../infra/typeorm/entities/Coffee';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { ICoffeesRepository } from '../../repositories/ICoffeesRepository';

interface IRequest {
  name: string;
  price: number;
  categories_id: string[];
}

@injectable()
class CreateCoffeeUseCase {
  constructor(
    @inject('CoffeesRepository')
    private coffeesRepository: ICoffeesRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
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
