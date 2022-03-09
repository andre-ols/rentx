import { Category } from '../model/Category';

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  get(): Category[];
  findByName(name: string): Category | undefined;
}

// DTO -> Category
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export { ICategoriesRepository, ICreateCategoryDTO };
