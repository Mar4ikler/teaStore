import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    generateToken(payload: any): string;
    verifyToken(token: string): any;
    checkLogin(email: string, password: string): Promise<import(".prisma/client").users>;
    getPayloadFromToken(token: string): Promise<string | {
        [key: string]: any;
    }>;
    registration(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
}
