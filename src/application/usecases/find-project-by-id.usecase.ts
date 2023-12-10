import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '@app/interfaces';

@Injectable()
export class FindProjectByIdUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(id: string) {
    return this.projectRepository.findById(id);
  }
}
