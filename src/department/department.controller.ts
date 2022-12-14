import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { DepartmentService } from './department.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Department } from './entities/department.entity';
import { UpdateDepartment } from './dto/update-department.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('departments')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}
  
  @Post()
  @ApiOperation({
    summary: 'Criar um departamento',
  })
  create(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return this.departmentService.create(createDepartmentDto);
  }
  
  @Get()
  @ApiOperation({
    summary: 'Listar todos os departamentos',
  })
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontrar um departamento pelo id',
  })
  findOne(@Param('id') id: string): Promise<Department> {
    return this.departmentService.findOne(id);
  }


  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um departamento pelo id',
  })
  update(
    @Param('id') id: string,
    @Body() updateDepartment: UpdateDepartment,
  ): Promise<Department> {
    return this.departmentService.update(id, updateDepartment);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um departamento pelo id',
  })
  delete(@Param('id') id: string) {
    this.departmentService.delete(id);
  }
}
