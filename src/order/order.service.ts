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
        const newOrder = this.orderRepository.create(order);
        return this.orderRepository.save(newOrder);
    };

    getOrders(){
        return this.orderRepository.find();
    };

    async getOrder(id: UUID){
        const verifyOrder = await this.orderRepository.findOne({
            where: {
                id: id
            }
        });

        if (verifyOrder){
            return verifyOrder;
        } else {
            throw new HttpException('The Order was not found.', 400);
        };
    };

    async deleteOrder(id: UUID){
        const orderVerify = await this.orderRepository.findOne({
            where: {
                id: id
            }
        });

        if(orderVerify){
            return this.orderRepository.delete({id});
        } else {
            throw new HttpException('Order to delete was not found.', 400);
        };
    };

    async updateOrder(id: UUID, order: UpdateOrderDto){
        const orderFound = await this.orderRepository.findOne({
            where: {
                id: id
            }
        });

        if(orderFound){
            return this.orderRepository.update({id}, order);
        } else {
            throw new HttpException('Order to update was not found.', 400);
        };
    };
};
