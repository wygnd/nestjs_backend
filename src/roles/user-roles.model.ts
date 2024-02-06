import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "../users/user.model";
import {RolesModel} from "./roles.model";


@Table({tableName: "user_roles", createdAt: false, updatedAt: false})
export class UserRolesModel extends Model<UserRolesModel> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => RolesModel)
    @Column({type: DataType.INTEGER})
    role_id: number;

    @ForeignKey(() => UserModel)
    @Column({type: DataType.INTEGER})
    user_id: number;
}