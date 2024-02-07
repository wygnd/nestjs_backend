import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: "1", description: "Уникальный идентификатор пользователя"})
    readonly user_id: string;
    @ApiProperty({example: "ЧСВ", description: "Причина, по которой забанили пользователя"})
    readonly banReason: string;
}