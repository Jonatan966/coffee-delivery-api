import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateOrderStatusUseCase } from './index';

class UpdateOrderStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: order_id } = request.params;
    const { status } = request.body;

    const updateOrderStatusUseCase = container.resolve(
      UpdateOrderStatusUseCase
    );

    const updatedOrder = await updateOrderStatusUseCase.execute({
      order_id,
      new_status: status,
    });

    return response.json(updatedOrder);
  }
}

export { UpdateOrderStatusController };
