import { ProductsListDto } from './products-list.dto'
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateProductsListDto } from './create-products-list.dto'
import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly userId: number

    @ApiProperty({
        type: [CreateProductsListDto]
    })
    @ValidateNested({ each: true })
    @Type(() => CreateProductsListDto)
    readonly productsList: ProductsListDto[]
}