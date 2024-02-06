import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {RolesModel} from "../roles/roles.model";
import {UserRolesModel} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({tableName: "users", createdAt: false, updatedAt: false})
export class UserModel extends Model<UserModel, UserCreationAttrs> {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "example@mail.ru", description: "Адрес электронной почты"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: "qwerty123", description: "Пароль пользователя"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: false, description: "Статус, проверяющий забане ли пользователь"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isBanner: boolean;

    @ApiProperty({example: "ЧСВ", description: "Причина блокировки пользователя"})
    @Column({type: DataType.TEXT('tiny')})
    banReason: string;

    @BelongsToMany(() => RolesModel, () => UserRolesModel)
    roles: RolesModel[]
}