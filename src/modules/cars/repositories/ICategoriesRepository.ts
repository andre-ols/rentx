import { Category } from '../entities/Category';

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}

// DTO -> Category
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export { ICategoriesRepository, ICreateCategoryDTO };

