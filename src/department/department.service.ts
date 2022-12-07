import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department: Department = { ...createDepartmentDto };
    return this.prisma.departments.create({
      data: department,
    });
  }

  findAll(): Promise<Department[]> {
    return this.prisma.departments.findMany();
  }

  findOne(id: string): Promise<Department> {
    return this.prisma.departments.findUnique({
      where: { id },
    });
  }
}
