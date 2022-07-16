import { inject, injectable } from 'tsyringe';
import { IStorageProvider } from '../../../../shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { ICoffeeRepository } from '../../repositories/ICoffeeRepository';

interface IRequest {
  image_name: string;
  coffee_id: string;
}

@injectable()
class UploadCoffeeImageUseCase {
  constructor(
    @inject('CoffeesRepository')
    private coffeesRepository: ICoffeeRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute({ coffee_id, image_name }: IRequest) {
    const foundedCoffee = await this.coffeesRepository.findById(coffee_id);

    if (!foundedCoffee) {
      throw new AppError('Coffee does not exists');
    }

    if (foundedCoffee.image_url) {
      await this.storageProvider.delete(foundedCoffee.image_url, 'coffees');
    }

    const createdFilename = await this.storageProvider.save(
      image_name,
      'coffees'
    );

    foundedCoffee.image_url = createdFilename;

    await this.coffeesRepository.create(foundedCoffee);

    return foundedCoffee;
  }
}

export { UploadCoffeeImageUseCase };
