import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateRoleDto} from "./dto/create-roles.dto";
import {RolesModel} from "./roles.model";

@Injectable()
export class RolesService {
    constructor(@InjectModel(RolesModel) private userRoleRepository: typeof RolesModel) {
    }

    async getRoleByValue(value: string) {
        return this.userRoleRepository.findAll({where: {value}});
    }

    async createRole(role: CreateRoleDto) {
        return this.userRoleRepository.create(role);
    }
}
