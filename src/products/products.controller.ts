import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductDto } from './dto/product.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id)
    }

    @Get()
    findAll() {
        return this.productsService.findAll()
    }

    @Post()
    create(@Body() productDto: ProductDto) {
        return this.productsService.create(productDto)
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() productDto: ProductDto
    ) {
        return this.productsService.update(id, productDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(id)
    }
}
