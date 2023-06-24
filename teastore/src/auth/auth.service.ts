import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma.service";
import { CreateProductDto } from "../products/dto/create-product.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService) {
  }

  generateToken(payload: any): string {
    return this.jwtService.sign(payload,{secret:'mark'});
  }

  verifyToken(token: string): any {
    return this.jwtService.verify(token,{secret:'mark'});
  }

  async checkLogin(email: string, password: string) {
    return await this.prisma.users.findFirst({
      where: {
        email: email,
        password: password
      }
    });
  }

  async getPayloadFromToken(token: string) {
    return this.jwtService.decode(token);
  }

  async registration(createUserDto: CreateUserDto) {
    return await this.prisma.users.create({
      data: {
        ...createUserDto
      }
    });
  }
}
