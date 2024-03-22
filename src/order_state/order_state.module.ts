import { Module } from '@nestjs/common';
import { OrderStateController } from './order_state.controller';
import { OrderStateService } from './order_state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_State } from './order_state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order_State])],
  controllers: [OrderStateController],
  providers: [OrderStateService]
})
export class OrderStateModule {}
