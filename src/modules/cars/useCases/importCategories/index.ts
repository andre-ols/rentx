import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

const categoryRepository = CategoriesRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(categoryRepository);
const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase,
);

export { importCategoriesController };
