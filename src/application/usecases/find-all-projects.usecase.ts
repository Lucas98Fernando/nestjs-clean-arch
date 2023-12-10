import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '@app/interfaces';

@Injectable()
export class FindAllProjectsUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute() {
    return this.projectRepository.findAll();
  }
}
