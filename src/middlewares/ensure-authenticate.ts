import { NextFunction, Request, Response } from 'express';
import { decode, JwtPayload } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '../shared/errors/AppError';

async function ensureAuthenticate(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Authorization header is required', 401);
  }

  const parsedAuthToken = authToken.replace('Bearer ', '');

  const decodedToken = decode(parsedAuthToken) as JwtPayload;

  const unixCurrentDate = Math.floor(Date.now() / 1000);

  if (!decodedToken || !decodedToken.iss.includes(process.env.APP_URL)) {
    throw new AppError('Invalid token', 401);
  }

  if (unixCurrentDate > decodedToken.exp) {
    throw new AppError('Token has expired', 401);
  }

  const usersRepository = new UsersRepository();
  const foundedUser = await usersRepository.findById(decodedToken.sub);

  if (!foundedUser) {
    throw new AppError('Invalid token', 401);
  }

  request.user = {
    id: foundedUser.id,
  };

  return next();
}

export { ensureAuthenticate };
