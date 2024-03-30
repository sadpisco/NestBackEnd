import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierModule } from 'src/supplier/supplier.module';
@Module({
  imports: [TypeOrmModule.forFeature([Purchase]), SupplierModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService]
})
export class PurchaseModule {}
