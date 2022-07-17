import { In, Repository } from 'typeorm';

import dataSource from '../../../../../shared/database';
import { ICreateCoffeeDTO } from '../../../dtos/ICreateCoffeeDTO';
import { ICoffeesRepository } from '../../../repositories/ICoffeesRepository';
import { Coffee } from '../entities/Coffee';

class CoffeesRepository implements ICoffeesRepository {
  private repository: Repository<Coffee>;

  constructor() {
    this.repository = dataSource.getRepository(Coffee);
  }

  async create({
    id,
    name,
    categories,
    price,
    image_url = '',
  }: ICreateCoffeeDTO): Promise<Coffee> {
    const coffeeObject = this.repository.create({
      id,
      name,
      price,
      categories,
      image_url,
    });

    const createdCoffee = await this.repository.save(coffeeObject);

    return createdCoffee;
  }

  async findById(id: string): Promise<Coffee | null> {
    const foundedCoffee = await this.repository.findOneBy({ id });

    return foundedCoffee;
  }

  async findByIds(ids: string[]): Promise<Coffee[]> {
    const foundedCoffee = await this.repository.findBy({ id: In(ids) });

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
