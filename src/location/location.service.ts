import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
    constructor(@InjectRepository(Location) private LocationRepository: Repository <Location>){}
    
    async createLocation(){

    };

    getLocations(){

    };

    async deleteLocation(){

    };

    async getLocation(){

    };

    async updateLocation(){

    };
}

