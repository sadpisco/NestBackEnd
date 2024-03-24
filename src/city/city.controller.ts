import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { CreateCityDto } from './dto/createCity.dto';
import { UpdateCityDto } from './dto/updateCity.dto';
import { CityService } from './city.service';
import { City } from './city.entity';
import { UUID } from 'crypto';

@Controller('city')
export class CityController {
    constructor (private cityService: CityService){}

    @Post()
    createCity(@Body() newCity: CreateCityDto){
        return this.cityService.createCity(newCity);
    };

    @Get()
    getCities(): Promise <City[]>{
        return this.cityService.getCities();
    };

    @Delete(':id')
    deleteCity(@Param('id', ParseUUIDPipe) id: UUID){
        return this.cityService.deleteCity(id)
    };

    @Get(':id')
    getCity(@Param('id', ParseUUIDPipe) id: UUID){
        return this.cityService.getCity(id);

    };

    @Put(':id')
    updateCity(@Param('id', ParseUUIDPipe) id: UUID, @Body() city: UpdateCityDto){
        return this.cityService.updateCity(id, city);

    }

    




}
