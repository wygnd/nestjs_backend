import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/login')
    async login(@Body() user: CreateUserDto) {
      return this.authService.login(user);
    }

    @Post('/registration')
    async registration(@Body() user: CreateUserDto) {
      return this.authService.registration(user);
    }
}
