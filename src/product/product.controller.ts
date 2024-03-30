import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { UpdateProductDto } from './dto/UpdateProduct.dto';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Post()
    createProduct(@Body() newProduct: CreateProductDto){
        return this.productService.createProduct(newProduct);
    };

    @Get()
    getProducts(): Promise <Product[]>{
        return this.productService.getProducts();
    };

    @Get(':id')
    getProduct(@Param('id', ParseUUIDPipe) id: UUID){
        return this.productService.getProduct(id);
    };

    @Delete(':id')
    deleteProduct(@Param('id', ParseUUIDPipe) id: UUID){
        return this.productService.deleteProduct(id);
    };

    @Put(':id')
    updateProduct(@Param('id', ParseUUIDPipe) id: UUID, @Body() product: UpdateProductDto){
        return this.productService.updateProduct(id, product);
    };
};
