import { Injectable } from '@nestjs/common';
import {UserModel} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private userRepository: typeof UserModel,
                private  roleService: RolesService) {
    }
    async createUser(user: CreateUserDto) {
        const userData = await this.userRepository.create(user);
        const userRole = await this.roleService.getRoleByValue("USER");
        await userData.$set("roles", [userRole.id]);
        userData.roles = [userRole];
        return userData;
    }

    async getUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }

    async getUserByEmail(email: string) {
        return this.userRepository.findOne({where: {email}, include: {all: true}})
    }
}
