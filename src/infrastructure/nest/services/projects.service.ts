import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'domain/dto/create-project.dto';
import { UpdateProjectDto } from 'domain/dto/update-project.dto';
import { CreateProjectUseCase } from 'application/usecases/create-project.usecase';
import { IProjectRepository } from 'interfaces/IProjectRepository';
import { FindAllProjectsUseCase } from 'application/usecases/find-all-projects.usecase';
import { FindProjectByIdUseCase } from 'application/usecases/find-project-by-id.usecase';
import { UpdateProjectUseCase } from 'application/usecases/update-project.usecase';
import { RemoveProjectUseCase } from 'application/usecases/remove-project.usecase ';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const useCase = new CreateProjectUseCase(this.projectRepository);
    await useCase.execute(createProjectDto);
  }

  async findAll() {
    const useCase = new FindAllProjectsUseCase(this.projectRepository);
    return await useCase.execute();
  }

  async findById(id: string) {
    const useCase = new FindProjectByIdUseCase(this.projectRepository);
    return await useCase.execute(id);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const useCase = new UpdateProjectUseCase(this.projectRepository);
    return await useCase.execute(id, updateProjectDto);
  }

  async remove(id: string) {
    const useCase = new RemoveProjectUseCase(this.projectRepository);
    return await useCase.execute(id);
  }
}
