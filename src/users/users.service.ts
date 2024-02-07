import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserModel} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private userRepository: typeof UserModel,
                private  roleService: RolesService) {
    }
    async createUser(user: CreateUserDto) {
        const candidate = await this.userRepository.findOne({where: {email: user.email}});
        if(candidate) {
            throw new HttpException("Пользователь с такой почтой уже зарегистрирован", HttpStatus.CONFLICT)
        }
        const userData = await this.userRepository.create(user);
        const userRole = await this.roleService.getRoleByValue("ADMIN");
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

    async addRole(dto: AddRoleDto) {}

    async banUser(dto: BanUserDto) {}
}
