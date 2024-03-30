import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { IngredientService } from 'src/ingredient/ingredient.service';
import { ProductService } from 'src/product/product.service';
import { SupplierService } from 'src/supplier/supplier.service';
import { CreatePurchaseDto } from './dto/CreatePurchase.dto';
import { UpdatePurchaseDto } from './dto/UpdatePurchase.dto';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase) private purchaseRepository: Repository <Purchase>,
        private supplierService: SupplierService,
        private ingredientService: IngredientService,
        private productService: ProductService
    ){}

    async createPurchase(purchase: CreatePurchaseDto){
        const newPurchase = this.purchaseRepository.create(purchase);
        return this.purchaseRepository.save(newPurchase);
    };

    getPurchases(){
        return this.purchaseRepository.find();
    };

    async getPurchase(id: UUID){
        const purchaseFound = await this.purchaseRepository.findOne({
            where: {
                id: id
            }
        });

        if (purchaseFound){
            return purchaseFound;
        } else {
            return new HttpException('Compra no encontrada.', 400);
        };
    };

    async deletePurchase(id: UUID){
        const result = await this.purchaseRepository.findOne({
            where: {
                id: id
            }
        });

        if(!result){
            return new HttpException(`Compra a borrar no encontrada.`, 400)
        } else {
            return this.purchaseRepository.delete({id: id})
        };
    };

    async updatePurchase(id: UUID, purchase: UpdatePurchaseDto){
        const purchaseBuscada = await this.purchaseRepository.findOne({
            where: {
                id: id
            }
        });
        if (!purchaseBuscada){
            return new HttpException(`Compra a Actualizar no encontrada.`, 400);
        } else {
            return this.purchaseRepository.update({id}, purchase);
        };
    };
};
