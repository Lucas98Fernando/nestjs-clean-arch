import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from '@app/domain';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  name: CreateProjectDto['name'];
  description: CreateProjectDto['description'];
}
