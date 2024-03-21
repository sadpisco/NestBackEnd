import { Module } from '@nestjs/common';
import { OrderTypeController } from './order_type.controller';
import { OrderTypeService } from './order_type.service';

@Module({
  controllers: [OrderTypeController],
  providers: [OrderTypeService]
})
export class OrderTypeModule {}
