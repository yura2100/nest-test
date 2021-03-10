import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Order, OrderDocument } from './order.schema'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { ProductsService } from '../products/products.service'

@Injectable()
export class OrdersService {
    private readonly logger = new Logger(OrdersService.name)

    constructor(
        @InjectModel(Order.name)
        private readonly orderModel: Model<OrderDocument>,
        private readonly productService: ProductsService
    ) {}

    async findOne(id: string): Promise<Order> {
        this.logger.debug(`Execution database query find order by id`)

        return this.orderModel.findById(id)
    }

    async findAll(userId: string): Promise<Order[]> {
        this.logger.debug(`Execution database query find all orders by user's id`)

        return this.orderModel.find().select(userId)
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        this.logger.debug(`Execution database query create new order`)

        const productIds: string[] = createOrderDto.productsList
            .map((product) => product.productId)

        const foundProducts =
            await this.productService.findManyByIds(productIds)

        for (let i = 0; i < createOrderDto.productsList.length; i++)
            createOrderDto.productsList[i].name = foundProducts[i].name

        const order = new this.orderModel(createOrderDto)
        return order.save()
    }

    async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
        this.logger.debug(`Execution database query update order by id`)

        return this.orderModel.findByIdAndUpdate(id, updateOrderDto, {
            new: true
        })
    }

    async remove(id: string): Promise<Order> {
        this.logger.debug(`Execution database query remove order by id`)

        return this.orderModel.findByIdAndRemove(id)
    }
}
