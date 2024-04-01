import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Payment_State } from './payment_state.entity';
import { PaymentStateService } from './payment_state.service';
import { CreatePaymentStateDto } from './dto/CreatePaymentState.dto';
import { UpdatePaymentStateDto } from './dto/UpdatePaymentState.dto';


@Controller('payment-state')
export class PaymentStateController {
    constructor(private paymentStateService: PaymentStateService){}

    @Post()
    createPaymentState(@Body() newPaymentState: CreatePaymentStateDto){
        return this.paymentStateService.createPaymentState(newPaymentState);
    };

    @Get()
    getPaymentStates(): Promise <Payment_State[]>{
        return this.paymentStateService.getPaymentStates();
    };

    @Get(':id')
    getPaymentState(@Param('id', ParseUUIDPipe) id: UUID){
        return this.paymentStateService.getPaymentState(id);
    };

    @Delete(':id')
    deletePaymentState(@Param('id', ParseUUIDPipe) id: UUID){
        return this.paymentStateService.deletePaymentState(id);
    };

    @Put(':id')
    updatePaymentState(@Param('id', ParseUUIDPipe) id: UUID, @Body() paymentState: UpdatePaymentStateDto){
        return this.paymentStateService.updatePaymentState(id, paymentState);
    };
};
