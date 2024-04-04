import { Injectable, HttpException } from '@nestjs/common';
import { Order_Type } from './order_type.entity';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderTypeDto } from './dto/CreateOrderType.dto';
import { UpdateOrderTypeDto } from './dto/UpdateOrderType.dto';
import e from 'express';

@Injectable()
export class OrderTypeService {
    constructor(@InjectRepository(Order_Type) private orderTypeRepository: Repository <Order_Type>){}

    async createOrderType(orderType: CreateOrderTypeDto){
        const verifyOrder = await this.orderTypeRepository.findOne({
            where: {
                type: orderType.type
            }
        });
        if (verifyOrder){
            throw new  HttpException("OrderType already exists.", 400);
        } else {
            const newOrderType = this.orderTypeRepository.create(orderType);
            return this.orderTypeRepository.save(newOrderType);
        };
    };

    getOrderTypes(){
        return this.orderTypeRepository.find();
    };

    async getOrderType(id: UUID){
        const searchOrder = await this.orderTypeRepository.findOne({
            where: {
                id:id
            }
        });

        if (searchOrder){
            return searchOrder
        } else {
            throw new HttpException('OrderType was not found.', 400);
        };
    };

    async deleteOrderType (id: UUID){
        const verifyType = await this.orderTypeRepository.findOne({
            where: {
                id: id
            }
        });

        if(verifyType){
            return this.orderTypeRepository.delete({id});
        } else {
            throw new HttpException('OrderType to delete was not found.', 400);
        }

    };

    async updateOrderType(id: UUID, orderType: UpdateOrderTypeDto){
        const typeVerify = await this.orderTypeRepository.findOne({
            where: {
                id: id
            }
        });

        if (typeVerify){
            return this.orderTypeRepository.update({id}, orderType);
        } else {
            throw new HttpException('OrderType to update was not found.', 400);
        }
    }


    
}
