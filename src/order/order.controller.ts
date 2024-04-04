import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Put } from '@nestjs/common';
import { Order } from './order.entity';
import { UUID } from 'crypto';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Post()
    createOrder(@Body() order: CreateOrderDto){
        return this.orderService.createOrder(order);
    };

    @Get()
    getOrders(){
        return this.orderService.getOrders();
    };

    @Get(':id')
    getOrder(@Param('id', ParseUUIDPipe) id: UUID){
        return this.orderService.getOrder(id);
    };

    @Delete(':id')
    deleteOrder(@Param('id', ParseUUIDPipe) id: UUID){
        return this.orderService.deleteOrder(id);
    };

    @Put(':id')
    updateOrder(@Param('id', ParseUUIDPipe) id: UUID, @Body() order: CreateOrderDto){
        return this.orderService.updateOrder(id, order);
    };
};
