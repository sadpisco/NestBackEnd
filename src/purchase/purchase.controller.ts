import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.entity';
import { CreatePurchaseDto } from './dto/CreatePurchase.dto';
import { UpdatePurchaseDto } from './dto/UpdatePurchase.dto';

@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService){}

    @Post()
    createPurchase(@Body() newPurchase: CreatePurchaseDto){
        return this.purchaseService.createPurchase(newPurchase);
    };

    @Get()
    getPurchases(): Promise <Purchase[]> {
        return this.purchaseService.getPurchases();
    };

    @Delete(':id')
    deletePurchase(@Param('id', ParseUUIDPipe) id: UUID){
        return this.purchaseService.deletePurchase(id);
    };

    @Get(':id')
    getPurchase(@Param('id', ParseUUIDPipe) id: UUID){
        return this.purchaseService.getPurchase(id);
    };

    @Put(':id')
    updatePurchase(@Param('id', ParseUUIDPipe) id: UUID, @Body() purchase: UpdatePurchaseDto){
        return this.purchaseService.updatePurchase(id, purchase);
    };
};
