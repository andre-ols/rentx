import { parse } from 'csv-parse';
import fs from 'fs';
import { Category } from '../../model/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      const categories: IImportCategory[] = [];

      stream.pipe(parseFile);

      parseFile
        .on('data', async (data: string[]) => {
          const [name, description] = data;

          categories.push({ name, description });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);

    categories.map(category => {
      const { name, description } = category;
      const categoryAlreadyExists = this.categoryRepository.findByName(name);

      if (categoryAlreadyExists) throw new Error('Category already exists');

      this.categoryRepository.create({ name, description });
    });
  }
}

export { ImportCategoriesUseCase };
