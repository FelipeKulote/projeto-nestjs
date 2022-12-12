import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.')
    }
    delete createUserDto.confirmPassword;

    const data: User = { ...createUserDto };
    const hashedPassword = await hash(data.password, 10);
    data.password = hashedPassword;

    return this.prisma.user
      .create({
        data,
      })
      .catch(handleError);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Id '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async update(id: string, updateUser: UpdateUserDto): Promise<User> {
    await this.findById(id);
    
    
    if (updateUser.password) {
      if (updateUser.password !== updateUser.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais.')
      }
      delete updateUser.confirmPassword;
    }

    const data: Partial<User> = { ...updateUser };

    if (data.password){
    const hashedPassword = await hash(data.password, 10);
    data.password = hashedPassword;
    }

    return this.prisma.user
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
    }
}
