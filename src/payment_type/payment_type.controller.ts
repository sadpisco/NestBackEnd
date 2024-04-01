import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Payment_Type } from './payment_type.entity';
import { PaymentTypeService } from './payment_type.service';
import { CreatePaymentTypeDto } from './dto/CreatePaymentType.dto';
import { UpdatePaymentTypeDto } from './dto/UpdatePaymentType.dto';


@Controller('payment-type')
export class PaymentTypeController {
    constructor(private paymentTypeService: PaymentTypeService){}

    @Post()
    createPaymentType(@Body() newPaymentType: CreatePaymentTypeDto){
        return this.paymentTypeService.createPaymentType(newPaymentType);
    };

    @Get()
    getPaymentTypes(){
        return this.paymentTypeService.getPaymentTypes();
    };

    @Get(':id')
    getPaymentType(@Param('id', ParseUUIDPipe) id: UUID){
        return this.paymentTypeService.getPaymentType(id);
    };

    @Delete(':id')
    deletePaymentType(@Param('id', ParseUUIDPipe) id: UUID){
        return this.paymentTypeService.deletePaymentType(id);
    };

    @Put(':id')
    updatePaymentType(@Param('id', ParseUUIDPipe) id: UUID, @Body() paymentType: UpdatePaymentTypeDto){
        return this.paymentTypeService.updatePaymentType(id, paymentType);
    };
};
