import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {UserModel} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {RolesModel} from "./roles/roles.model";
import {UserRolesModel} from "./roles/user-roles.model";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        models: [UserModel, RolesModel, UserRolesModel],
        autoLoadModels: true,
      }),
      UsersModule,
      RolesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
