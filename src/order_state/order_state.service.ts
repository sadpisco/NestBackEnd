import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order_State } from './order_state.entity';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { CreateOrderStateDto } from './dto/CreateOrderState.dto';
import { UpdateOrderStateDto } from './dto/UpdateOrderState.dto';

@Injectable()
export class OrderStateService {
    constructor(@InjectRepository(Order_State) private orderStateRepository: Repository <Order_State>){}

    async createOrderState(orderState: CreateOrderStateDto){
        const verifyOrder = await this.orderStateRepository.findOne({
            where: {
                state: orderState.state
            }
        });

        if (verifyOrder) {
            throw new HttpException("",400);
        } else {
            const createOrder = this.orderStateRepository.create(orderState);
            return this.orderStateRepository.save(createOrder);
        };
    };

    getOrderStates(){
        return this.orderStateRepository.find();
    };

    async getOrderState(id: UUID){
        const verifyState = await this.orderStateRepository.findOne({
            where: {
                id: id
            }
        });

        if (verifyState){
            return verifyState;
        } else {
            throw new HttpException('This OrderState does not exist.', 400);
        };
    };

    async deleteOrderState(id: UUID){
        const orderVerify = await this.orderStateRepository.findOne({
            where: {
                id: id
            }
        });

        if(orderVerify){
            return this.orderStateRepository.delete({id});
        } else {
            throw new HttpException("OrderState could not be found.", 400);
        }
     };

     async updateOrderState(id : UUID, orderState: UpdateOrderStateDto){
        const stateVerify = await this.orderStateRepository.findOne({
            where: {
                id : id
            }
        }); 
        if(stateVerify){
            return this.orderStateRepository.update({id}, orderState)
        } else {
            throw new HttpException("This orderState was not found.", 400);
        };
     };
};
