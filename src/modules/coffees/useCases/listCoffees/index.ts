import { inject, injectable } from 'tsyringe';
import { Coffee } from '../../infra/typeorm/entities/Coffee';
import { ICoffeesRepository } from '../../repositories/ICoffeesRepository';

@injectable()
class ListCoffeesUseCase {
  constructor(
    @inject('CoffeesRepository')
    private coffeesRepository: ICoffeesRepository
  ) {}

  async execute(): Promise<Coffee[]> {
    const coffees = await this.coffeesRepository.list();

    return coffees;
  }
}

export { ListCoffeesUseCase };
