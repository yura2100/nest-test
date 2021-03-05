import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.orderService.findOne(id)
    }

    @Get(':userId')
    findAll(@Param('userId') userId: string) {
        return this.orderService.findAll(userId)
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.create(createOrderDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.update(id, updateOrderDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderService.remove(id)
    }
}
