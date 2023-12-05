import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'domain/dto/create-project.dto';
import { UpdateProjectDto } from 'domain/dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from 'domain/entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private respository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = new Project(createProjectDto);
    this.respository.create(project);
    await this.respository.save(project);

    return project;
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
