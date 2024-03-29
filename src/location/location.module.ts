import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), CityModule],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
