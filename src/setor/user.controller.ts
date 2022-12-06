import { Controller, Get } from '@nestjs/common';

@Controller('setor')
export class SetorController {
  @Get()
  findAll() {
    return 'Setor criado';
  }
}
