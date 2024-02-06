import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserModel} from "../users/user.model";
import {UserRolesModel} from "./user-roles.model";

interface RoleCreationAttrs {
    value: string,
    description: string
}

@Table({tableName: "roles", timestamps: false, updatedAt: false})
export class RolesModel extends Model<RolesModel, RoleCreationAttrs> {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "ADMIN", description: "Значение роли пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: "Администратор", description: "Описание роли"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => UserModel, () => UserRolesModel)
    users: UserModel[]
}