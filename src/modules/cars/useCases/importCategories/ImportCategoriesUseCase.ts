import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

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
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    for(const category of categories ) {
      const { name, description } = category;
      const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

      if (categoryAlreadyExists) throw new Error(`Category ${name} already exists`);

      this.categoriesRepository.create({ name, description });
    }
  }
}

export { ImportCategoriesUseCase };

