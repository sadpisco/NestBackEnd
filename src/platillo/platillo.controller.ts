import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Platillo } from './platillo.entity';
import { CreatePlatilloDto } from './dto/CreatePlatillo.dto';
import { UpdatePlatilloDto } from './dto/UpdatePlatillo.dto';
import { PlatilloService } from './platillo.service';

@Controller('platillo')
export class PlatilloController {
    constructor(private platilloService: PlatilloService){}

    @Post()
    createPlatillo(@Body() newPlatillo: CreatePlatilloDto){
        return this.platilloService.createPlatillo(newPlatillo);
    };

    @Get()
    getPlatillos(){
        return this.platilloService.getPlatillos();
    };

    @Get(':id')
    getPlatillo( @Param('id', ParseUUIDPipe) id: UUID){
        return this.platilloService.getPlatillo(id);
    };

    @Delete(':id')
    deletePlatillo(@Param('id', ParseUUIDPipe) id: UUID ){
        return this.platilloService.deletePlatillo(id);
    };

    @Put(':id')
    updatePlatillo(@Param('id', ParseUUIDPipe) id: UUID, @Body() platillo: UpdatePlatilloDto){
        return this.platilloService.updatePlatillo(id, platillo);
    };
};


