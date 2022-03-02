import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUSeCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUSeCase.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };
