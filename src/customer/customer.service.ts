import { Injectable, HttpException } from '@nestjs/common';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { CreateCustomerDto } from './dto/CreateCustomer.dto';
import { UpdateCustomerDto } from './dto/UpdateCustomer.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer) private customerRepository: Repository <Customer>){}

    async createCustomer(newCustomer: CreateCustomerDto){

        const verifyNewCustomer = await this.customerRepository.findOne({
            where:{
                dni: newCustomer.dni
            }
        });

        if (verifyNewCustomer) {
            throw new HttpException('DNI ya registrado en la DB.', 400);
        } else {
            const createNewCustomer = this.customerRepository.create(newCustomer);
            return this.customerRepository.save(createNewCustomer);
        };
    };

    getCustomers(){
        return this.customerRepository.find();
    };

    async getCustomer(id: UUID){
        const foundCustomer = await this.customerRepository.findOne({
            where: {
                id: id
            }
        });
        if(foundCustomer){
            return foundCustomer
        } else {
            throw new HttpException('Cliente no existe en la DB.',400);
        };
    };

    async deleteCustomer(id: UUID){
        const customerFound = await this.customerRepository.findOne({
            where:{
                id: id
            }
        });

        if (customerFound){
            return this.customerRepository.delete({id});
        } else {
            throw new HttpException('El cliente a borrar no existe.', 400);
        };
    };

    async updateCustomer(id: UUID, customer: UpdateCustomerDto){
        const findCustomer = await this.customerRepository.findOne({
            where: {
                id: id
            }
        });

        if(findCustomer){
            return this.customerRepository.update({id}, customer);
        } else {
            throw new HttpException('Cliente a actualizar no existe en DB.', 400);
        };
    };
};
