import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCoffeeUseCase } from './index';

class CreateCoffeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, categories_id } = request.body;

    const createCoffeeUseCase = container.resolve(CreateCoffeeUseCase);

    const createdCoffee = await createCoffeeUseCase.execute({
      name,
      price,
      categories_id,
    });

    return response.status(201).json(createdCoffee);
  }
}

export { CreateCoffeeController };
