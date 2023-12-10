import { Inject, Injectable } from '@nestjs/common';
import { Project, CreateProjectDto } from '@app/domain';
import { IProjectRepository } from '@app/interfaces';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    this.projectRepository.create(project);
    return project;
  }
}
