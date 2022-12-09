import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Felipe Augusto',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'exemplo@mail.com',
  })
  email: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha para login',
    example: '#Senhasegura123',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Confirmação de senha para criação do usuário',
    example: '#Senhasegura123',
  })
  confirmPassword: string;

  @IsString()
  @ApiProperty({
    description: 'CPF do usuário',
    example: '999.999.999-99',
  })
  cpf: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://avatars.githubusercontent.com/u/106357116',
  })
  image: string;

  @IsString()
  @ApiProperty({
    description: 'Nivel de acesso do sistema',
    example: 'Administrador',
  })
  role: string;
}
