import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'domain/dto/create-project.dto';
import { Project } from 'domain/entities/project.entity';
import { IProjectRepository } from 'interfaces/IProjectRepository';

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
