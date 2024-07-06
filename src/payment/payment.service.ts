import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { UUID } from 'crypto';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
  ) {}

  async createPayment(payment: CreatePaymentDto) {
    const newPayment = this.paymentRepository.create(payment);
    return this.paymentRepository.save(newPayment);
  }

  getPayments() {
    return this.paymentRepository.find();
  }

  async getPayment(id: UUID) {
    const verifyPayment = await this.paymentRepository.findOne({
      where: {
        id: id,
      },
    });

    if (verifyPayment) {
      return verifyPayment;
    } else {
      throw new HttpException('Payment was not found.', 400);
    }
  }

  async deletePayment(id: UUID) {
    const paymentVerify = await this.paymentRepository.findOne({
      where: {
        id: id,
      },
    });

    if (paymentVerify) {
      return this.paymentRepository.delete({ id });
    } else {
      throw new HttpException('Payment to delete was not found.', 400);
    }
  }

  async updatePayment(id: UUID, payment: UpdatePaymentDto) {
    const paymentFound = await this.paymentRepository.findOne({
      where: {
        id: id,
      },
    });

    if (paymentFound) {
      return this.paymentRepository.update({ id }, payment);
    } else {
      throw new HttpException('Payment to update was not found.', 400);
    }
  }
}
