import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, { name, description });

    await this.repository.save(specification);
    return specification
  }

  async list(): Promise<Specification[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<Specification | undefined> {
    return await this.repository.findOne({ name });
  }
}

export { SpecificationsRepository };

