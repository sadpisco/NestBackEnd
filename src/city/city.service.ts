import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { CreateCityDto } from './dto/createCity.dto';
import { UpdateCityDto } from './dto/updateCity.dto';

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private cityRepository: Repository <City>){}

    async createCity (city: CreateCityDto){
        const foundCity = await this.cityRepository.findOne({
            where: {
                name: city.name
            }
        });
        if(foundCity){
            return new HttpException(`La ciudad que intentas agregar, ya existe.`, 400);

        };

        const newCity = this.cityRepository.create(city);
        return this.cityRepository.save(newCity);
    };

    getCities (){
        return this.cityRepository.find({
            relations: ['locations']
        });
    };

    async deleteCity(id: UUID){
        const result = await this.cityRepository.findOne({
            where: {
                id: id
            }
        });

        if(!result){
            return new HttpException(`Cidudad a borrar no encontrada.`, 400);
        } else {
            return await this.cityRepository.delete({id: id})
        }
    };

    async getCity(id: UUID){
        const cityFound = await this.cityRepository.findOne({
            where: {
                id: id
            },
            relations: ['locations']

        });

        if(!cityFound){
            return new HttpException('Ciudad no encontrada',400);
        } else {
            return cityFound;
        }
    };

    async updateCity(id: UUID, city: UpdateCityDto){
        const cityBuscada = await this.cityRepository.findOne({
            where: {
                id: id
            }
        });

        if(!cityBuscada){
            return new HttpException(`Ciudad a actualizar no encontrada`,400);
        } else {
            return this.cityRepository.update({id}, city);
        }
    };


}
