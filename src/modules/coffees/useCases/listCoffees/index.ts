import { inject, injectable } from 'tsyringe';
import { Coffee } from '../../infra/typeorm/entities/Coffee';
import { ICoffeeRepository } from '../../repositories/ICoffeeRepository';

@injectable()
class ListCoffeesUseCase {
  constructor(
    @inject('CoffeesRepository')
    private coffeesRepository: ICoffeeRepository
  ) {}

  async execute(): Promise<Coffee[]> {
    const coffees = await this.coffeesRepository.list();

    return coffees;
  }
}

export { ListCoffeesUseCase };
