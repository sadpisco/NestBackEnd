import { Injectable, HttpException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';
import { Order } from './order.entity';
import { UUID } from 'crypto';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private orderRepository: Repository <Order>){}

    async createOrder (order: CreateOrderDto){

    };

    getOrders(){
        return this.orderRepository.find();
    };

    async getOrder(id: UUID){

    };

    async deleteOrder(id: UUID){

    };

    async updateOrder(id: UUID, order: UpdateOrderDto){

    };
}
