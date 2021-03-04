import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Order, OrderDocument } from './schemas/order.schema'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { ProductsService } from '../products/products.service'

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
        private readonly productsService: ProductsService
    ) {}

    async getOne(id: string): Promise<Order> {
        return this.orderModel.findById(id)
    }

    async getAll(userId: string): Promise<Order[]> {
        return this.orderModel.find().select(userId)
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        for (const product of createOrderDto.productsList) {
            const foundProduct = await this.productsService.getOne(product.productId)

            product.name = foundProduct.name
        }

        const order = new this.orderModel(createOrderDto)
        return order.save()
    }

    async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
        return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true })
    }

    async remove(id: string): Promise<Order> {
        return this.orderModel.findByIdAndRemove(id)
    }
}
