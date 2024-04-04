import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Order_Type } from './order_type.entity';
import { OrderTypeService } from './order_type.service';
import { CreateOrderTypeDto } from './dto/CreateOrderType.dto';
import { UpdateOrderTypeDto } from './dto/UpdateOrderType.dto';


@Controller('order-type')
export class OrderTypeController {
    constructor(private orderTypeService: OrderTypeService){}

    @Post()
    createOrderType(@Body() orderType: CreateOrderTypeDto){
        return this.orderTypeService.createOrderType(orderType);
    };

    @Get()
    getOrderTypes(){
        return this.orderTypeService.getOrderTypes();
    };

    @Get(':id')
    getOrderType(@Param('id', ParseUUIDPipe) id: UUID){
        return this.orderTypeService.getOrderType(id);
    };

    @Delete(':id')
    deleteOrderType(@Param('id', ParseUUIDPipe) id: UUID){
        return this.orderTypeService.deleteOrderType(id);
    };

    @Put(':id')
    updateOrderType(@Param('id', ParseUUIDPipe) id: UUID, @Body() orderType: UpdateOrderTypeDto){
        return this.orderTypeService.updateOrderType(id, orderType);
    };
}
