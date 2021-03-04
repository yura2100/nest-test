import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductDto } from './dto/product.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productsService.getOne(id)
    }

    @Get()
    getAll() {
        return this.productsService.getAll()
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
