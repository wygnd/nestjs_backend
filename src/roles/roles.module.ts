import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {RolesModel} from "./roles.model";
import {UserModel} from "../users/user.model";
import {UserRolesModel} from "./user-roles.model";

@Module({
  imports: [SequelizeModule.forFeature([RolesModel, UserModel, UserRolesModel])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
