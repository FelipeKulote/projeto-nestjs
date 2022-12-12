import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4ZW1wbG9AbWFpbC5jb20iLCJpYXQiOjE2NzA4Njc5NzMsImV4cCI6MTY3MDk1NDM3M30.d1INRnk4uTIu9wnZQIlt77O5-Sdz7LE6cW38xrV6w1Y',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
