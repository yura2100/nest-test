import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseArrayPipe,
    Post,
    Put,
    UseInterceptors
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductDto } from './dto/product.dto'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { SpecDto } from './dto/spec.dto'
import { LoggingInterceptor } from '../logging.interceptor'

@ApiTags('products')
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

    @ApiBody({ type: [SpecDto] })
    @Post('search')
    findBySpecs(
        @Body(new ParseArrayPipe({ items: SpecDto })) specs: SpecDto[]
    ) {
        return this.productsService.findManyBySpecs(specs)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() productDto: ProductDto) {
        return this.productsService.update(id, productDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(id)
    }
}
