import { Inject, Injectable } from '@nestjs/common';
import { Project, UpdateProjectDto } from '@app/domain';
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
    await this.projectRepository.update(project);
  }
}
