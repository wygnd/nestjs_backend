import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ApiOperation, ApiProperty, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserModel} from "../users/user.model";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @ApiOperation({summary: "Авторизация пользователя"})
    @ApiResponse({status: 200, type: UserModel})
    @Post('/signin')
    async login(@Body() user: CreateUserDto) {
      return this.authService.login(user);
    }

    @ApiOperation({summary: "Регистрация пользователя"})
    @ApiResponse({status: 200, type: UserModel})
    @Post('/signup')
    async registration(@Body() user: CreateUserDto) {
      return this.authService.registration(user);
    }
}
