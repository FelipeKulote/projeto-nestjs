import { Injectable } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";

@Injectable()
export class DepartmentService {
  create(createDepartmentDto: CreateDepartmentDto) {
    return 'Setor criado: ' + JSON.stringify(createDepartmentDto)
  }

  findAll() {
    return 'Setores encontrados.';
  }
}