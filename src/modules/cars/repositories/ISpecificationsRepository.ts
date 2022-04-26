import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<Specification>;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification | undefined>;
}

// DTO -> Specification
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };

