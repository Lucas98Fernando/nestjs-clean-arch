import { Inject, Injectable } from '@nestjs/common';
import { UpdateProjectDto } from 'domain/dto/update-project.dto';
import { Project } from 'domain/entities/project.entity';
import { IProjectRepository } from 'interfaces/IProjectRepository';

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
