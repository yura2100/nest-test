import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module'
import { MongooseModule } from '@nestjs/mongoose'
import { OrdersModule } from './orders/orders.module'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:00000000@cluster0.yjpyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
        ProductsModule,
        OrdersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
