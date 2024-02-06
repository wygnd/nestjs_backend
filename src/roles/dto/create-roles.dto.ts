import {ApiProperty} from "@nestjs/swagger";


export class CreateRoleDto {
    @ApiProperty({example: "ADMIN", description: "Значение роли пользователя"})
    readonly value: string;

    @ApiProperty({example: "Администратор", description: "описание роли польователя"})
    readonly description: string;
}