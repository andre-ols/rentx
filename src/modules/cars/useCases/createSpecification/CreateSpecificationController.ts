import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;
      const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
      createSpecificationUseCase.execute({ name, description });
      return response.status(201).send();
    }
    catch (err: any) {
      return response.status(500).json({
        message: err.message
      });
    }
  }
}

export { CreateSpecificationController };

