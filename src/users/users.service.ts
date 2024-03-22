import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository <User>){}

    async createUser (user: CreateUserDto){
        const foundUser = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        });

        if(foundUser){
            return new HttpException('El usuario ya ha sido encontrado.', 400);
        };
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers(){
        return this.userRepository.find();
    }

    async getUser(id: UUID){
        const userFound = await this.userRepository.findOne({
            where:{
                id: id
            }
        });

        if(!userFound){
            return new HttpException("El usuario no fue encontrado.", 400)
        } else {
            return userFound
        }
    }

    async deleteUser(id: UUID){
        const result = await this.userRepository.findOne({
            where:{
                id: id
            }
        });
        if(!result){
            return new HttpException('Usuario a borrar no encontrado.', 400);
        } else {
            return await this.userRepository.delete({ id: id})
        }
    }

    async updateUser(id: UUID, user: UpdateUserDto ){
        const userBuscado = await this.userRepository.findOne({
            where: {
                id: id
            }
        });
        if (!userBuscado){
            return new HttpException("Usuario a actualizar no encontrado.", 400)
        } else {
            return this.userRepository.update({id}, user)

        }
    }
}
