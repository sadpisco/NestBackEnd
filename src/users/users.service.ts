import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository <User>){}

    createUser(user: CreateUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
}
