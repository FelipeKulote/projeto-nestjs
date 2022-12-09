import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do departamento',
    example: 'Elétrica',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem para representar o departamento',
    example: 'http://image.com',
  })
  image: string;
}
