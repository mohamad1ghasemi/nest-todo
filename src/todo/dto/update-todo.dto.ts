import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class UpdateTodoDto {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
