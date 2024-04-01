import { Injectable, HttpException } from '@nestjs/common';
import { Payment_State } from './payment_state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentStateDto } from './dto/CreatePaymentState.dto';
import { UpdatePaymentStateDto } from './dto/UpdatePaymentState.dto';
import { UUID } from 'crypto';

@Injectable()
export class PaymentStateService {
    constructor(@InjectRepository(Payment_State) private paymentStateRepository: Repository<Payment_State>){}

    async createPaymentState(paymentState: CreatePaymentStateDto){
        const verifyPaymentState = await this.paymentStateRepository.findOne({
            where: {
                state: paymentState.state
            }
        });

        if (verifyPaymentState){
            throw new HttpException('PaymentState was not found on DB.', 400);
        } else {
            const newPaymentState = this.paymentStateRepository.create(paymentState);
            return this.paymentStateRepository.save(newPaymentState);
        };
    };

    getPaymentStates(){
        return this.paymentStateRepository.find();
    };

    async getPaymentState(id: UUID){
        const paymentStateVerify = await this.paymentStateRepository.findOne({
            where: {
                id: id
            }
        });
        if (paymentStateVerify){
            return paymentStateVerify;
        } else {
            throw new HttpException('PaymentState is not existing',400);
        };
    };

    async deletePaymentState(id: UUID){
        const paymentStateFound = await this.paymentStateRepository.findOne({
            where: {
                id: id
            }
        });

        if (paymentStateFound){
            return this.paymentStateRepository.delete({id});
        } else {
            throw new HttpException('PaymentState to delete was not found.',400);
        }
    };

    async updatePaymentState(id: UUID, paymentState: UpdatePaymentStateDto){
        const foundPaymentState = await this.paymentStateRepository.findOne({
            where: {
                id: id
            }
        });

        if (foundPaymentState){
            return this.paymentStateRepository.update({id}, paymentState);
        } else {
            throw new HttpException('PaymentState to update was not found.', 400);
        };
    };
};
