import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from 'src/location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier]), LocationModule],
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SupplierModule {}
