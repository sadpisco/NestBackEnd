import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UUID } from 'crypto';


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() newUser: CreateUserDto){
        return this.usersService.createUser(newUser)
    };

    @Get()
    getUsers(): Promise <User[]>{
        return this.usersService.getUsers();
    };

    @Get(':id')
    getUser(@Param('id', ParseUUIDPipe) id: UUID){
        return this.usersService.getUser(id);
    };

    @Delete(':id')
    deleteUser(@Param('id', ParseUUIDPipe) id: UUID){
        return this.usersService.deleteUser(id);

    };

    @Patch(':id')
    updateUser(@Param('id', ParseUUIDPipe) id: UUID, @Body() user: UpdateUserDto){
        return this.usersService.updateUser(id, user);
    };
}
