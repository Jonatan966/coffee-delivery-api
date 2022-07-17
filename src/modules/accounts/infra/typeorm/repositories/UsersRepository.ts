import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

import dataSource from '../../../../../shared/database';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find({
      select: ['id', 'name', 'email', 'created_at', 'updated_at'],
    });

    return users;
  }

  async findById(user_id: string): Promise<User | null> {
    const foundedUser = await this.repository.findOneBy({ id: user_id });

    return foundedUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    const foundedUser = await this.repository.findOneBy({ email });

    return foundedUser;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const passwordHash = await hash(password, 8);

    const userObject = this.repository.create({
      name,
      email,
      password: passwordHash,
    });

    await this.repository.save(userObject);

    delete userObject.password;

    return userObject;
  }
}

export { UsersRepository };
