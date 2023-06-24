import { AuthService } from './auth.service';
import { CreateUserDto } from "../users/dto/create-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(credentials: {
        email: string;
        password: string;
    }): Promise<false | {
        token: string;
        id: number;
    }>;
    registry(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
}
