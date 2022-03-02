import { Request, Response } from 'express';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    if (!file) return response.status(400).send();

    this.importCategoriesUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoriesController };
