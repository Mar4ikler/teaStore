import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthService } from "../auth/auth.service";
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
    findAll(): Promise<import(".prisma/client").users[]>;
    findOne(token: string): Promise<import(".prisma/client").users>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").users>;
    remove(id: string): Promise<import(".prisma/client").users>;
}
