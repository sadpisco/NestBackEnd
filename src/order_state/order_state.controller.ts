import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { OrderStateService } from './order_state.service';
import { Order_State } from './order_state.entity';
import { CreateOrderStateDto } from './dto/CreateOrderState.dto';
import { UpdateOrderStateDto } from './dto/UpdateOrderState.dto';
import { OrderService } from 'src/order/order.service';

@Controller('order-state')
export class OrderStateController {
    constructor(private orderStateService: OrderStateService){}

    @Post()
    createOrderState(@Body() orderState: CreateOrderStateDto){
        return this.orderStateService.createOrderState(orderState);
    };

    @Get()
    getOrderStates(){
        return this.orderStateService.getOrderStates();
    };

    @Get(':id')
    getOrderState(@Param('id', ParseUUIDPipe) id: UUID){
        return this.orderStateService.getOrderState(id);
    };

    @Delete(':id')
    deleteOrderState(@Param('id', ParseUUIDPipe) id: UUID){
        return this.orderStateService.deleteOrderState(id);
    };

    @Put(':id')
    updateOrderState(@Param('id', ParseUUIDPipe) id: UUID, @Body() orderState: UpdateOrderStateDto){
        return this.orderStateService.updateOrderState(id, orderState);
    };
};
