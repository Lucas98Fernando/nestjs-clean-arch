import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from 'interfaces/IProjectRepository';

@Injectable()
export class RemoveProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(id: string) {
    return this.projectRepository.remove(id);
  }
}
