import { inject, injectable } from 'tsyringe';

import { Coffee } from '../../infra/typeorm/entities/Coffee';
import { CategoriesRepository } from '../../infra/typeorm/repositories/CategoriesRepository';
import { CoffeesRepository } from '../../infra/typeorm/repositories/CoffesRepository';

interface IRequest {
  name: string;
  price: number;
  categories_id: string[];
}

@injectable()
class CreateCoffeeUseCase {
  constructor(
    @inject('CoffeesRepository')
    private coffeesRepository: CoffeesRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute({ name, price, categories_id }: IRequest): Promise<Coffee> {
    const categories = await this.categoriesRepository.findByIds(categories_id);

    if (!categories.length) {
      throw new Error('Categories does not exists');
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
