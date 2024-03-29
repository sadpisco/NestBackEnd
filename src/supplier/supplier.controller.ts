import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';
import { CreateSupplierDto } from './dto/CreateSupplier.dto';
import { UpdateSupplierDto } from './dto/UpdateSupplier.dto';
import { UUID } from 'crypto';

@Controller('supplier')
export class SupplierController {
    constructor(private supplierService: SupplierService){}

    @Post()
    createSupplier(@Body() newSupplier: CreateSupplierDto){
        return this.supplierService.createSupplier(newSupplier);
    };

    @Get()
    getSuppliers(): Promise <Supplier[]>{
        return this.supplierService.getSuppliers();
    };

    @Delete(':id')
    deleteSupplier(@Param('id', ParseUUIDPipe) id: UUID){
        return this.supplierService.deleteSupplier(id);
    };

    @Get(':id')
    getSupplier(@Param('id', ParseUUIDPipe) id: UUID){
        return this.supplierService.getSupplier(id);

    };

    @Put(':id')
    updateSupplier(@Param('id', ParseUUIDPipe) id: UUID, @Body() supplier: UpdateSupplierDto){
        return this.supplierService.updateSupplier(id, supplier);
    }




}
