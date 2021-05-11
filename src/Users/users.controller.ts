import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";

import { CreateUserDto } from '../dto/create-user.dto'
import {UpdateUsersDto} from "../dto/update-users.dto";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Get()
    findAll() {
        return this.userService.getAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.userService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Put(':id')
    updateUser(@Body() updateUsersDto: UpdateUsersDto, @Param('id') id: string) {
        return this.userService.update(updateUsersDto, id)
    }

    @Delete(':id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(id)
    }


}