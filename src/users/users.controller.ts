import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UpdateUserDto } from './dto/updateUser.dto';


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
    getUser(@Param('id', ParseIntPipe) id: number){
        return this.usersService.getUser(id);
    };

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.usersService.deleteUser(id);

    };

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto){
        return this.usersService.updateUser(id, user);
    };
}
