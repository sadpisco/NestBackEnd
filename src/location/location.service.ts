import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';

@Injectable()
export class LocationService {
    constructor(@InjectRepository(Location) private locationRepository: Repository <Location>){}
    
    async createLocation(location: CreateLocationDto){
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
        return this.locationRepository.find();

    };

    async deleteLocation(){

    };

    async getLocation(){

    };

    async updateLocation(){

    };
}

