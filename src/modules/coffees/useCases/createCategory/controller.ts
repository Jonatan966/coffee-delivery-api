import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './index';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const createdCategory = await createCategoryUseCase.execute({ name });

    return response.status(201).json(createdCategory);
  }
}

export { CreateCategoryController };
