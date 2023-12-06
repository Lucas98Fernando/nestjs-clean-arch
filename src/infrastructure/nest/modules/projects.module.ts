import { Module } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { ProjectsController } from '../controllers/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'domain/entities/project.entity';
import { ProjectRepository } from 'domain/repositories/project.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    ProjectRepository,
    {
      provide: 'IProjectRepository',
      useExisting: ProjectRepository,
    },
  ],
})
export class ProjectsModule {}
