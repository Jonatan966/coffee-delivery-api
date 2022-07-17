import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import ms from 'ms';

import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
  issuerEndpoint: string;
}

interface IResponse {
  token: string;
  tokenExpirationDate: number;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    email,
    password,
    issuerEndpoint,
  }: IRequest): Promise<IResponse> {
    const foundedUser = await this.usersRepository.findByEmail(email);

    if (!foundedUser) {
      throw new AppError('User does not exists');
    }

    const isValidPassword = await compare(password, foundedUser.password);

    if (!isValidPassword) {
      throw new AppError('User does not exists');
    }

    const tokenExpiresIn = ms('1d');
    const tokenExpirationDate = Date.now() + tokenExpiresIn;

    const generatedToken = sign({}, process.env.JWT_SECRET, {
      subject: foundedUser.id,
      expiresIn: ms(tokenExpiresIn),
      issuer: `${process.env.APP_URL}${issuerEndpoint}`,
    });

    return {
      token: generatedToken,
      tokenExpirationDate,
    };
  }
}

export { AuthenticateUserUseCase };
