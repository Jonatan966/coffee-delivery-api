import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOrdersUseCase } from './index';

class ListOrdersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOrdersUseCase = container.resolve(ListOrdersUseCase);

    const orders = await listOrdersUseCase.execute();

    return response.json(orders);
  }
}

export { ListOrdersController };
