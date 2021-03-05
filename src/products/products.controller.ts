import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductDto } from './dto/product.dto'

@Controller('products')
export class ProductsController {
    private readonly logger = new Logger(ProductsController.name)

    constructor(private readonly productsService: ProductsService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        this.logger.debug(`Request /products/${id} GET`)

        return this.productsService.findOne(id)
    }

    @Get()
    findAll() {
        this.logger.debug(`Request /products/ GET`)

        return this.productsService.findAll()
    }

    @Post()
    create(@Body() productDto: ProductDto) {
        this.logger.debug(`Request /products/ POST`)

        return this.productsService.create(productDto)
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() productDto: ProductDto
    ) {
        this.logger.debug(`Request /products/${id} PUT`)

        return this.productsService.update(id, productDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.logger.debug(`Request /products/${id} DELETE`)

        return this.productsService.remove(id)
    }
}
