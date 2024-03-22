import { Module } from '@nestjs/common';
import { OrderTypeController } from './order_type.controller';
import { OrderTypeService } from './order_type.service';
import { Order_Type } from './order_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Order_Type])],
  controllers: [OrderTypeController],
  providers: [OrderTypeService]
})
export class OrderTypeModule {}
