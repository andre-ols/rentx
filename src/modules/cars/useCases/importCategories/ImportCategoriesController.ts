import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

class ImportCategoriesController {

  handle(request: Request, response: Response): Response {
    const { file } = request;

    if (!file) return response.status(400).send();
    try {
      const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase);
      importCategoriesUseCase.execute(file);
      return response.status(201).send();
    }
    catch (err: any) {
      return response.status(500).json({
        message: err.message
      });
    }
  }
}

export { ImportCategoriesController };

