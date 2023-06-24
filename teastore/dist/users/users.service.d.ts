import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma.service";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
    findAll(): Promise<import(".prisma/client").users[]>;
    findOne(id: number): Promise<import(".prisma/client").users>;
    findByEmailAndPassword(email: string, password: string): Promise<import(".prisma/client").users>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").users>;
    remove(id: number): Promise<import(".prisma/client").users>;
}
