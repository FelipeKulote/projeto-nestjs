import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';

export class UpdateDepartment extends PartialType(CreateDepartmentDto) {}
