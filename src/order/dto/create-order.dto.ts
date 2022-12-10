import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: '38bf7930-e13f-4186-b5bb-ff1448284fb1',
  })
  userId: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do departamento que será direcionado o pedido',
    example: 'Elétrica',
  })
  departmentName: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos produtos que estão no pedido',
    example:
      '["932602de-36b4-417d-be34-a7dd2fb45a4e","23c9e940-db1e-4fac-8269-58ed2269f110" ]',
  })
  products: string[];
}
