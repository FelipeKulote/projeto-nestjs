import { Injectable, NotFoundException } from '@nestjs/common';
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
    delete updateUser.confirmPassword;
    if (updateUser.password) {
      const hashedPassword = await hash(updateUser.password, 10);
      updateUser.password = hashedPassword;
    }
    const data: Partial<User> = { ...updateUser };

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
