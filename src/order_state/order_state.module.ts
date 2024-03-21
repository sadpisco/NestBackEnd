import { Module } from '@nestjs/common';
import { OrderStateController } from './order_state.controller';
import { OrderStateService } from './order_state.service';

@Module({
  controllers: [OrderStateController],
  providers: [OrderStateService]
})
export class OrderStateModule {}
