import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      const category = await createCategoryUseCase.execute({ name, description });
  
      return response.status(201).json(category);
    }
    catch (err: any) {
      return response.status(500).json({
        message: err.message
      });
    }
  }
} 

export { CreateCategoryController };

