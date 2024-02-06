import { Injectable } from '@nestjs/common';
import {UserModel} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private userRepository: typeof UserModel) {
    }
    async createUser(user: CreateUserDto) {
        return await this.userRepository.create(user);
    }

    async getUsers() {
        return await this.userRepository.findAll();
    }
}
