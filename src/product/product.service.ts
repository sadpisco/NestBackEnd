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
        const newProduct = this.productRepository.findOne({
            where: {
                nombre: product.nombre
            }
        });

        if (newProduct){
            throw new HttpException(`Producto ya existente.`, 400);
        } else {
            const crearProducto = await this.productRepository.create(product);
            return this.productRepository.save(crearProducto);
        };
    };

    getProducts(){
        return this.productRepository.find();
    };

    async getProduct(id: UUID){
        const productFound = await this.productRepository.findOne({
            where: {
                id: id
            }
        });
        if ( productFound ){
            return productFound;
        } else {
            throw new HttpException(`El ID del producto buscado es inexistente.`,400);
        }
    };

    async deleteProduct(id: UUID){
        const productBuscado = await this.productRepository.findOne({
            where: {
                id: id
            }
        });
        if (!productBuscado){
            return new HttpException(`Producto a borrar no encontrado.`,400);
        } else {
            return this.productRepository.delete({id: id});
        }
    };

    async updateProduct(id: UUID, product: UpdateProductDto){
        const productBuscado = await this.productRepository.findOne({
            where: {
                id: id
            }
        });

        if (!productBuscado){
            return new HttpException(`Producto a actualizar no encontrado.`, 400);
        } else {
            return this.productRepository.update({id}, product);
        }
    }
}
