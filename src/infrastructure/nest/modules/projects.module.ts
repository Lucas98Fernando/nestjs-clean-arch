import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsService, ProjectsController } from '@app/infrastructure';
import { Project, ProjectRepository } from '@app/domain';

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
