import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private categoriesRepository: IUsersRepository,
  ) {}

  async execute(dto: ICreateUserDto): Promise<User> {
    const userAlreadyExists = await this.categoriesRepository.findByUsername(dto.username);

    if (userAlreadyExists) throw new Error('User already exists');

    const user = this.categoriesRepository.create(dto);
    return user;
  }
}

export { CreateUserUseCase };

