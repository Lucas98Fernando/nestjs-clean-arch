import { Inject, Injectable } from '@nestjs/common';
import { Project, ProjectStatus, UpdateProjectDto } from '@app/domain';
import { IProjectRepository } from '@app/interfaces';

@Injectable()
export class UpdateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(id: string, input: UpdateProjectDto) {
    await this.projectRepository.findById(id);
    const project = new Project(input, id);

    if (project.cancelled_at) {
      project.status = ProjectStatus.CANCELLED;
    }

    await this.projectRepository.update(project);
  }
}
