import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) {}

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.orderService.getOne(id)
    }

    @Get(':userId')
    getAll(@Param('userId') userId: string) {
        return this.orderService.getAll(userId)
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
