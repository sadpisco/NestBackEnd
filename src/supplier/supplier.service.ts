import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './supplier.entity';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/CreateSupplier.dto';
import { UpdateSupplierDto } from './dto/UpdateSupplier.dto';


@Injectable()
export class SupplierService {
    constructor(@InjectRepository(Supplier) private supplierRepository: Repository <Supplier>){}

    async createSupplier(supplier: CreateSupplierDto){
        const foundSupplier = await this.supplierRepository.findOne({
            where: {
                name: supplier.name
            }
        });

        if (foundSupplier){
            throw new HttpException(`Ya existe un supplier con este nomber`, 400);
        } else {
            const newSupplier = this.supplierRepository.create(supplier);
            return this.supplierRepository.save(newSupplier);
        };
    };

    getSuppliers(){
        return this.supplierRepository.find();
    }

    async deleteSupplier(id : UUID){
        const result = await this.supplierRepository.findOne({
            where:{
                id: id
            }
        });
        if(!result){
            return new HttpException(`Supplier a borrar no encontrado.`, 400)
        } else {
            return await this.supplierRepository.delete({id: id});
        };
    };

    async getSupplier(id: UUID){
        const supplierFound = this.supplierRepository.findOne({
            where: {
                id: id
            }
        });
        if (supplierFound){
            return supplierFound;
        } else {
            return new HttpException('Supplier no encontrado.', 400);
        }

    }

    async updateSupplier(id: UUID, supplier: UpdateSupplierDto){
        const supplierBuscado = this.supplierRepository.findOne({
            where: {
                id: id
            }
        });

        if(!supplierBuscado){
            return new HttpException(`Supplier a Actualizar no encontrado.`, 400)
        } else {
            return this.supplierRepository.update({id}, supplier)
        }

    }
}
