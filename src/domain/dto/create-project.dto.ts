import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsDate()
  started_at: Date | null;

  @IsOptional()
  @IsDate()
  forecasted_at: Date | null;
}
