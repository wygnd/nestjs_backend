import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "./user.model";
import {RolesModel} from "../roles/roles.model";
import {UserRolesModel} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";

@Module({
    imports: [
        SequelizeModule.forFeature(
            [UserModel, RolesModel, UserRolesModel]
        ),
        RolesModule],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {
}
