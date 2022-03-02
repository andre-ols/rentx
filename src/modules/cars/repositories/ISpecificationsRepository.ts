import { Specification } from '../model/Specification';

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  get(): Specification[];
  findByName(name: string): Specification | undefined;
}

// DTO -> Specification
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
