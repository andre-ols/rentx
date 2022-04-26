import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUSeCase = container.resolve(ListCategoriesUseCase);
    const categories = await listCategoriesUSeCase.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };

