import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { User } from "../entities/User";


interface IUsersRepository {
    list(): Promise<User[]>;
    findByUsername(username: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(user: ICreateUserDto): Promise<User>;

}

export { IUsersRepository };