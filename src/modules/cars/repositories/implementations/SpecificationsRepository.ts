import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description });
    this.specifications.push(specification);
  }

  get(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(
      specification => specification.name === name,
    );
  }
}

export { SpecificationsRepository };
