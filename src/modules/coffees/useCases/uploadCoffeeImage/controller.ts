import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadCoffeeImageUseCase } from './index';

class UploadCoffeeImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: coffee_id } = request.params;
    const coffeeImage = request.file;

    const uploadCoffeeImageUseCase = container.resolve(
      UploadCoffeeImageUseCase
    );

    const coffeeWithNewImage = await uploadCoffeeImageUseCase.execute({
      coffee_id,
      image_name: coffeeImage.filename,
    });

    return response.status(201).json(coffeeWithNewImage);
  }
}

export { UploadCoffeeImageController };
