import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateOrderUseCase } from './index';

class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { address, payment_type, items } = request.body;

    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    const createdOrder = await createOrderUseCase.execute({
      address,
      payment_type,
      items,
    });

    return response.status(201).json(createdOrder);
  }
}

export { CreateOrderController };
