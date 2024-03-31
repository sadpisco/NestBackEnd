import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Platillo } from './platillo.entity';
import { UUID } from 'crypto';
import { CreatePlatilloDto } from './dto/CreatePlatillo.dto';
import { UpdatePlatilloDto } from './dto/UpdatePlatillo.dto';
import { Repository } from 'typeorm';


@Injectable()
export class PlatilloService {
    constructor(@InjectRepository(Platillo) private platilloRepository: Repository <Platillo>){}

    async createPlatillo(newPlatillo: CreatePlatilloDto){
        const verifyPlatillo = await this.platilloRepository.findOne({
            where: {
                nombre: newPlatillo.nombre
            }
        });

        if (verifyPlatillo){
            throw new HttpException(`Este platillo ya existe.`, 400);
        } else {
            const createPlatillo = this.platilloRepository.create(newPlatillo);
            return this.platilloRepository.save(createPlatillo);
        };
    };

    getPlatillos(){
        return this.platilloRepository.find();
    };

    async getPlatillo( id: UUID ){
        const buscaPlatillo = await this.platilloRepository.findOne({
            where: {
                id: id
            }
        });

        if (buscaPlatillo){
            return buscaPlatillo
        } else {
            throw new HttpException('El platillo que buscas no existe.' , 400);
        };
    };

    async deletePlatillo(id: UUID) {
        const findPlatillo = await this.platilloRepository.findOne({
            where: {
                id: id
            }
        });

        if (findPlatillo) {
            return this.platilloRepository.delete({ id });
        } else {
            throw new HttpException('El platillo a borrar no fue encontrado.', 400);
        };
    };

    async updatePlatillo ( id: UUID , platillo: UpdatePlatilloDto){
        const foundPlatillo = await this.platilloRepository.findOne({
            where: {
                id: id
            }
        });

        if (foundPlatillo){
            return this.platilloRepository.update({id}, platillo);
        } else {
            throw new HttpException('Platillo a actualizar no encontrado.', 400);
        };
    };
};
