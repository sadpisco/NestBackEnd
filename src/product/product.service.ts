import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { UpdateProductDto } from './dto/UpdateProduct.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository <Product>,
    ){}

    async createProduct(product: CreateProductDto){


    }
}
