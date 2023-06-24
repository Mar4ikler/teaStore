import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from './auth.service';
import { CreateUserDto } from "../users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    const user = await this.authService.checkLogin(credentials.email, credentials.password);

    if(user) {
      try {
        const token = this.authService.generateToken({ sub: user.user_id, email: user.email });
        return { token: token, id: user.user_id };
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  }

  @Post('registry')
  async registry(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registration(createUserDto);
  }
}
