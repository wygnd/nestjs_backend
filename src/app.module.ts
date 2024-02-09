import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {UserModel} from "./users/user.model";
import {RolesModule} from './roles/roles.module';
import {RolesModel} from "./roles/roles.model";
import {UserRolesModel} from "./roles/user-roles.model";
import {AuthModule} from './auth/auth.module';
import {loggerMiddleware} from "./users/middleware/logger.middleware";
import {UsersController} from "./users/users.controller";
import { UploadsModule } from './uploads/uploads.module';

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
            synchronize: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        UploadsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule implements  NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(loggerMiddleware)
            .forRoutes(UsersController);
    }
}