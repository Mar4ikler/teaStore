import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma.service";


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.users.create({
      data: {
        ...createUserDto
      }
    });
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }


  async findOne(id: number) {
    return await this.prisma.users.findUnique({
      where: {
        user_id: id
      }
    });
  }

  async findByEmailAndPassword(email: string, password: string) {
    return await this.prisma.users.findFirst({
      where: {
        email: email,
        password: password
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.users.update({
      where: {
        user_id: id
      },
      data: {
        ...updateUserDto
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: {
        user_id: id
      }
    });
  }
}
