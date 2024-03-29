import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/createLocation.dto';
import { UpdateLocationDto } from './dto/updateLocation.dto';
import { Location } from './location.entity';
import { UUID } from 'crypto';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService){}

    @Post()
    createLocation(@Body() newLocation: CreateLocationDto){
        return this.locationService.createLocation(newLocation);
    };

    @Get()
    getLocations(): Promise <Location[]>{
        return this.locationService.getLocations();
    }

    @Delete('id')
    deleteLocation(@Param('id', ParseUUIDPipe) id: UUID){
        return this. locationService.deleteLocation(id);

    }

    @Get(':id')
    getLocation(@Param('id', ParseUUIDPipe) id: UUID){
        return this.locationService.getLocation(id);
    };

    @Put(':id')
    updateLocation(@Param('id', ParseUUIDPipe) id: UUID, @Body() location: UpdateLocationDto){
        return this.locationService.updateLocation(id, location);

    };
};
