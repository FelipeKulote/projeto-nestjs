import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { DepartmentService } from './department.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('departments')
@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}
  
  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto)
  }
}
