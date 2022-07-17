import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  list(): Promise<User[]>;
  findById(user_id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository };
