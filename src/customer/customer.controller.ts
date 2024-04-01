import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/CreateCustomer.dto';
import { UpdateCustomerDto } from './dto/UpdateCustomer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Post()
    createCustomer(@Body() customer: CreateCustomerDto){
        return this.customerService.createCustomer(customer);
    };

    @Get()
    getCustomers(){
        return this.customerService.getCustomers();
    };

    @Get(':id')
    getCustomer(@Param('id', ParseUUIDPipe) id: UUID){
        return this.customerService.getCustomer(id);
    };

    @Delete(':id')
    deleteCustomer(@Param('id', ParseUUIDPipe) id: UUID){
        return this.customerService.deleteCustomer(id);
    };

    @Put(':id')
    updateCustomer(@Param('id', ParseUUIDPipe) id: UUID, @Body() customer:UpdateCustomerDto ){
        return this.customerService.updateCustomer(id, customer);
    };
};
