import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from 'src/location/location.module';
import { PurchaseModule } from 'src/purchase/purchase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier]), LocationModule],
  controllers: [SupplierController],
  providers: [SupplierService],
  exports: [SupplierService]
})
export class SupplierModule {}
