import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dto = request.body as ICreateUserDto;
      const createUserUseCase = container.resolve(CreateUserUseCase);
      const user = await createUserUseCase.execute(dto);
  
      return response.status(201).json(user);
    }
    catch (err: any) {
      return response.status(500).json({
        message: err.message
      });
    }
  }
} 

export { CreateUserController };

