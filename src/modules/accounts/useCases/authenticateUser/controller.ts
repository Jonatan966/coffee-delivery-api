import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './index';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const authenticationResult = await authenticateUserUseCase.execute({
      email,
      password,
      issuerEndpoint: request.baseUrl,
    });

    return response.status(201).json(authenticationResult);
  }
}

export { AuthenticateUserController };
