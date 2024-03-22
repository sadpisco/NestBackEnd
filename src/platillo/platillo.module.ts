import { Module } from '@nestjs/common';
import { PlatilloController } from './platillo.controller';
import { PlatilloService } from './platillo.service';
import { Platillo } from './platillo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Platillo])],
  controllers: [PlatilloController],
  providers: [PlatilloService]
})
export class PlatilloModule {}
