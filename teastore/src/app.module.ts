import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./all-exception.filter";
import { AuthModule } from './auth/auth.module';
import { ChatGateway } from "./webSocket/chat.gateway";

@Module({
  imports: [UsersModule, ReviewsModule, SubcategoriesModule, ProductsModule, OrdersModule, AuthModule],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  }, ChatGateway],
})
export class AppModule {}
