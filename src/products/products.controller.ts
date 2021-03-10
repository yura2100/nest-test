import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseArrayPipe,
    Post,
    Put
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductDto } from './dto/product.dto'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { SpecDto } from './dto/spec.dto'


@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll() {
        return this.productsService.findAll()
    }

    @Get('count')
    groupAndCountByCategory() {
        return this.productsService.groupAndCountByCategory()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id)
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

    @ApiBody({ type: [SpecDto] })
    @Post('count')
    groupAndCountBySpecs(
        @Body(new ParseArrayPipe({ items: SpecDto })) specs: SpecDto[]
    ) {
        return this.productsService.groupAndCountBySpecs(specs)
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