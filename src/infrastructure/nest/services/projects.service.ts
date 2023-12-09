import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto, UpdateProjectDto } from '@app/domain';
import {
  CreateProjectUseCase,
  FindAllProjectsUseCase,
  FindProjectByIdUseCase,
  RemoveProjectUseCase,
  UpdateProjectUseCase,
} from '@app/application';
import { IProjectRepository } from '@app/interfaces';

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
