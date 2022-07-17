import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowOrderUseCase } from './index';

class ShowOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: order_id } = request.params;

    const showOrderUseCase = container.resolve(ShowOrderUseCase);

    const foundedOrder = await showOrderUseCase.execute(order_id);

    return response.json(foundedOrder);
  }
}

export { ShowOrderController };
