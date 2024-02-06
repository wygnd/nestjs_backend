import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { RolesService } from './roles.service';
import {CreateRoleDto} from "./dto/create-roles.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserModel} from "../users/user.model";
import {RolesModel} from "./roles.model";

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: "Получить роль по значению"})
  @ApiResponse({status: 200, type: RolesModel})
  @Get('/:value')
  async getRoleByValue(@Param('value') value: string) {
    console.log(value);
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({summary: "Создание роли пользователя"})
  @ApiResponse({status: 200, type: RolesModel})
  @Post('/create')
  async createRole(@Body() role: CreateRoleDto) {
    return this.rolesService.createRole(role);
  }
}
