import { Module } from '@nestjs/common';
import { PaymentStateController } from './payment_state.controller';
import { PaymentStateService } from './payment_state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment_State } from './payment_state.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Payment_State])],
  controllers: [PaymentStateController],
  providers: [PaymentStateService]
})
export class PaymentStateModule {}
