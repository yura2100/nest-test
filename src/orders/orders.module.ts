import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Order, OrderSchema } from './schemas/order.schema'
import { ProductsModule } from '../products/products.module'
import { ProductsService } from '../products/products.service'
import { OrdersController } from './orders.controller'
import { Product, ProductSchema } from '../products/schemas/product.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
        ProductsModule
    ],
    controllers: [OrdersController],
    providers: [OrdersService, ProductsService]
})
export class OrdersModule {}
