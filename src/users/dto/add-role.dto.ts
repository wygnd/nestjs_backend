import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: "ADMIN", description: "Новая роль"})
    readonly value: string;
    @ApiProperty({example: "1", description: "Уникальный идентификатор пользователя"})
    readonly user_id: string;
}
