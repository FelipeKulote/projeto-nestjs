import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do departamento',
    example: 'Elétrica',
  })
  name: string;
}
