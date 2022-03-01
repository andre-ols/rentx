import { Category } from '../model/Category';
import {
  ICategoriesRpository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRpository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category({
      name,
      description,
    });

    this.categories.push(category);
  }

  get(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find(category => category.name === name);
  }
}

export { CategoriesRepository };
