import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartment } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department: Department = { ...createDepartmentDto };
    return this.prisma.departments
      .create({
        data: department,
      })
      .catch(this.handleError);
  }

  findAll(): Promise<Department[]> {
    return this.prisma.departments.findMany();
  }

  async findById(id: string): Promise<Department> {
    const record = await this.prisma.departments.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Id '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<Department> {
    return this.findById(id);
  }

  async update(
    id: string,
    updateDepartment: UpdateDepartment,
  ): Promise<Department> {
    await this.findById(id);

    const data: Partial<Department> = { ...updateDepartment };
    return this.prisma.departments
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.departments.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
