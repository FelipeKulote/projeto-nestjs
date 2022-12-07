import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    const department: Department = { ...createDepartmentDto };
    return this.prisma.departments.create({
      data: department,
    });
  }

  findAll() {
    return this.prisma.departments.findMany();
  }
}
