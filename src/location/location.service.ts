import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';
import { UpdateLocationDto } from './dto/updateLocation.dto';
import { UUID } from 'crypto';
import { CityService } from 'src/city/city.service';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location) private locationRepository: Repository <Location>,
        private CityService: CityService
        ){}
    
    async createLocation(location: CreateLocationDto){
        const verifyCity = await this.CityService.getCity(location.cityId);
        if(!verifyCity){
            return new HttpException(`La ciudad en de la location que intentas crear no existe.`, 400);
        }

        const foundLocation = await this.locationRepository.findOne({
            where: {
                name: location.name
            }
        })
        if(foundLocation){
            return new HttpException(`La location que intentas agregar ya existe`, 400);
        }
        const newLocation = this.locationRepository.create(location);
        return this.locationRepository.save(newLocation);

    };

    

    getLocations(){
        return this.locationRepository.find({
            relations: ['city']
        });
    };

    async deleteLocation(id: UUID){
        const result = await this.locationRepository.findOne({
            where: {
                id: id
            }
        })

        if (!result){
            return new HttpException(`Location a borrar no encontrada`, 400)
        } else {
            return await this.locationRepository.delete({id: id});
        }

    };

    async getLocation(id: UUID){
        const locationFound = await this.locationRepository.findOne({
            where: {
                id: id
            }
        });

        if(locationFound){
            return locationFound
        } else {
            return new HttpException('Location no encontrada', 400);
        }
    };

    

    async updateLocation(id: UUID, location: UpdateLocationDto){
        const locationBuscada = await this.locationRepository.findOne({
            where: {
                id: id
            }
        });

        if(!locationBuscada){
            return new HttpException(`Location a Actualizar no encontrada`, 400)
        };

    };

}

