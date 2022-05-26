import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepository implements IUsersRepository {
    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User)
    }


    list(): Promise<User[]> {
        return this.repository.find()
    }

    findByUsername(username: User['username']): Promise<User | undefined> {
        const user = this.repository.findOne({ where: { username } });
        return user;
    }

    async findById(id: User['id']): Promise<User | undefined> {
        const user = await this.repository.findOne(id)
        return user;
    }

    async create(dto: ICreateUserDto): Promise<User> {
        const user = this.repository.create(dto)

        await this.repository.save(user)

        return user
    }

}

export { UsersRepository }