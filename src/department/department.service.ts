import { Injectable } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { Department } from "./entities/department.entity";

@Injectable()
export class DepartmentService {
  departaments: Department[] = [];

  create(createDepartmentDto: CreateDepartmentDto) {
    const department: Department = { id: 'random_id', ...createDepartmentDto };
    this.departaments.push(department);
    return department;
  }

  findAll() {
    return 'Setores encontrados.';
  }
}