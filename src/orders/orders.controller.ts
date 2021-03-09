import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    private readonly logger = new Logger(OrdersController.name)

    constructor(private readonly orderService: OrdersService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        this.logger.debug(`Request /orders/${id} GET`)

        return this.orderService.findOne(id)
    }

    @Get(':userId')
    findAll(@Param('userId') userId: string) {
        this.logger.debug(`Request /orders/ GET`)

        return this.orderService.findAll(userId)
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        this.logger.debug(`Request /orders/ POST`)

        return this.orderService.create(createOrderDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        this.logger.debug(`Request /orders/${id} PUT`)

        return this.orderService.update(id, updateOrderDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.logger.debug(`Request /orders/${id} DELETE`)

        return this.orderService.remove(id)
    }
}
