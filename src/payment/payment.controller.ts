import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Put } from '@nestjs/common';
import { Payment } from './payment.entity';
import { UUID } from 'crypto';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService){}

    @Post()
    createPayment(@Body() payment: CreatePaymentDto){
        return this.paymentService.createPayment(payment);
    };

    @Get()
    getPayments(){
        return this.paymentService.getPayments();
    };

    @Get(':id')
    getPayment(@Param('id', ParseUUIDPipe) id: UUID){
        return this.paymentService.getPayment(id);
    };

    @Delete(':id')
    deletePayment(@Param('id', ParseUUIDPipe) id: UUID){
        return this.paymentService.deletePayment(id);
    };

    @Put(':id')
    updatePayment(@Param('id', ParseUUIDPipe) id: UUID, @Body() payment:UpdatePaymentDto){
        return this.paymentService.updatePayment(id, payment);
    };
};
