import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsDateString()
  started_at: Date | null;

  @IsOptional()
  @IsDateString()
  forecasted_at: Date | null;
}
