import { Controller, Get, Post } from '@nestjs/common';

@Controller('setor')
export class SetorController {
  @Get()
  findAll() {
    return 'Setor encontrado';
  }

  @Post()
  create() {
    return 'Setor criado'
  }
}
