import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { UUID } from 'crypto';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';

@Injectable()
export class PaymentService {
    constructor (@InjectRepository(Payment) private paymentRepository: Repository <Payment>){}

    async createPayment(payment: CreatePaymentDto){

    };

    getPayments(){
        return this.paymentRepository.find();
    };

    async getPayment(id: UUID){

    };

    async deletePayment(id: UUID){

    };

    async updatePayment(id: UUID, payment: UpdatePaymentDto){

    };
}
