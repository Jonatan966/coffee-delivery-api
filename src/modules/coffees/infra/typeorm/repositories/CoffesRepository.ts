import { Repository } from 'typeorm';

import dataSource from '../../../../../shared/database';
import { ICreateCoffeeDTO } from '../../../dtos/ICreateCoffeeDTO';
import { ICoffeeRepository } from '../../../repositories/ICoffeeRepository';
import { Coffee } from '../entities/Coffee';

class CoffeesRepository implements ICoffeeRepository {
  private repository: Repository<Coffee>;

  constructor() {
    this.repository = dataSource.getRepository(Coffee);
  }

  async create({ name, categories, price }: ICreateCoffeeDTO): Promise<Coffee> {
    const coffeeObject = this.repository.create({
      name,
      price,
      categories,
      image_url: '',
    });

    const createdCoffee = await this.repository.save(coffeeObject);

    return createdCoffee;
  }

  async findById(id: string): Promise<Coffee | null> {
    const foundedCoffee = await this.repository.findOneBy({ id });

    return foundedCoffee;
  }

  async list(): Promise<Coffee[]> {
    const coffees = await this.repository.find({
      relations: ['categories'],
    });

    return coffees;
  }
}

export { CoffeesRepository };
