import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './index';

class ListCategoriesController {
  async handle(_: Request, response: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categories = await listCategoriesUseCase.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };
