import { Injectable, HttpException } from '@nestjs/common';
import { Payment_Type } from './payment_type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { CreatePaymentTypeDto } from './dto/CreatePaymentType.dto';
import { UpdatePaymentTypeDto } from './dto/UpdatePaymentType.dto';

@Injectable()
export class PaymentTypeService {

    constructor(@InjectRepository(Payment_Type) private paymentTypeRepository: Repository <Payment_Type>){}

    async createPaymentType(paymentType: CreatePaymentTypeDto){
        const verifyType = await this.paymentTypeRepository.findOne({
            where: {
                type: paymentType.type
            }
        });
        if (verifyType) {
            throw new HttpException('This payment type has already been created.',400);
        } else {
            const newPaymentType = this.paymentTypeRepository.create(paymentType);
            return this.paymentTypeRepository.save(newPaymentType);
        };
    };

    getPaymentTypes(){
        return this.paymentTypeRepository.find();
    };

    async getPaymentType(id: UUID){
        const typeVerify = await this.paymentTypeRepository.findOne({
            where: {
                id: id
            }
        });

        if( typeVerify) {
            return typeVerify;
        } else {
            throw new HttpException ("Payment type was not found on the database.",400);
        };
    };

    async deletePaymentType(id: UUID){
        const searchType = await this.paymentTypeRepository.findOne({
            where: {
                id: id
            }
        });
        if (searchType){
            return this.paymentTypeRepository.delete({id: id});
        } else {
            return new HttpException('Payment Type was not found on the database.',400);
        };
    };

    async updatePaymentType(id: UUID, paymentType: UpdatePaymentTypeDto){
        const typeSearch = await this.paymentTypeRepository.findOne({
            where: {
                id: id
            }
        });

        if(typeSearch){
            return this.paymentTypeRepository.update({id}, paymentType);
        } else {
            throw new HttpException('Payment Type was not found on the database.', 400);
        };
    };
};
