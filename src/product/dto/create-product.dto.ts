import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Título/nome para o produto',
    example: 'Lâmpada',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Lâmpada de Led 9W',
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    description: 'Preço do produto',
    example: '5,50',
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Url de uma imagem',
    example: 'http://image.com',
  })
  image: string;
}
