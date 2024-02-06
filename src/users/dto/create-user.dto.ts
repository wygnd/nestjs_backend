import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "example@mail.ru", description: "Адрес электронной почты"})
    readonly email: string;
    @ApiProperty({example: "qwerty1234", description: "Пароль пользователя"})
    readonly password: string;
}