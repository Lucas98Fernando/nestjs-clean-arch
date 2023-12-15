import { Inject, Injectable } from '@nestjs/common';
import { Project, CreateProjectDto, ProjectStatus } from '@app/domain';
import { IProjectRepository } from '@app/interfaces';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(input: CreateProjectDto) {
    const project = new Project(input);

    if (project.started_at) {
      project.status = ProjectStatus.ACTIVE;
    }

    this.projectRepository.create(project);
    return project;
  }
}
