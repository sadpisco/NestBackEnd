import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTypeModule } from './order_type/order_type.module';
import { OrderStateModule } from './order_state/order_state.module';
import { PaymentTypeModule } from './payment_type/payment_type.module';
import { PaymentStateModule } from './payment_state/payment_state.module';
import { CustomerModule } from './customer/customer.module';
import { PlatilloModule } from './platillo/platillo.module';
import { ProductModule } from './product/product.module';
import { PurchaseModule } from './purchase/purchase.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { SupplierModule } from './supplier/supplier.module';
import { LocationModule } from './location/location.module';
import { CityModule } from './city/city.module';




//Types que aceptan los campos de la DB usada "mysql" en este caso
//Link a documentacion: https://typeorm.io/entities#column-types-for-mysql--mariadb
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      username: "root",
      password: "Arkantro99!",
      host: "localhost",
      port: 3306,
      database: "proyectonest",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule, 
    OrderModule, 
    PaymentModule, OrderTypeModule, OrderStateModule, PaymentTypeModule, PaymentStateModule, CustomerModule, PlatilloModule, ProductModule, PurchaseModule, IngredientModule, RecipeModule, SupplierModule, LocationModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
