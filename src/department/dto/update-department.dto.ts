import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentDto } from './create-department.dto';

export class UpdateDepartment extends PartialType(CreateDepartmentDto) {}
