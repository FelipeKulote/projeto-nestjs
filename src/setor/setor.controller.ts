import { Controller, Get, Post } from '@nestjs/common';
import { SetorService } from './setor.service';

@Controller('setor')
export class SetorController {
  constructor(private setorService: SetorService) {}
  
  @Get()
  findAll() {
    return this.setorService.findAll();
  }

  @Post()
  create() {
    return this.setorService.create()
    return 'Setor criado'
  }
}
