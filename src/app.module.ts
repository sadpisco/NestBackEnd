import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';


//Types que aceptan los campos de la DB usada "mysql" en este caso
//Link a documentacion: https://typeorm.io/entities#column-types-for-mysql--mariadb
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'Arkantro99!',
      host: 'localhost',
      port: 3306,
      database: 'proyectonest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule, 
    OrderModule, 
    PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
