import { Injectable } from "@nestjs/common";

@Injectable()
export class SetorService {
  create() {
    return 'Setor criado.'
  }
  findAll() {
    return 'Setores encontrados.';
  }
}