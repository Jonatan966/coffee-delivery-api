import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCoffeesUseCase } from './index';

class ListCoffeesController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listCoffeesUseCase = container.resolve(ListCoffeesUseCase);

    const coffees = await listCoffeesUseCase.execute();

    return response.json(coffees);
  }
}

export { ListCoffeesController };
