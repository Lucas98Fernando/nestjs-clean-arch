import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'domain/entities/project.entity';
import { IProjectRepository } from 'interfaces/IProjectRepository';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectRepository implements IProjectRepository {
  constructor(
    @InjectRepository(Project)
    private respository: Repository<Project>,
  ) {}

  async create(project: Project): Promise<void> {
    await this.respository.save(project);
  }

  async update(project: Project): Promise<void> {
    await this.respository.update({ id: project.id }, project);
  }

  async findAll(): Promise<Project[]> {
    return await this.respository.find();
  }

  async findById(id: string): Promise<Project> {
    return await this.respository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.respository.delete({ id });
  }
}
