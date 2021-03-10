import { ProductsListDto } from './products-list.dto'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateProductsListDto } from './create-products-list.dto'
import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly userId: string

    @ApiProperty({
        type: [CreateProductsListDto]
    })
    @ValidateNested({ each: true })
    @Type(() => CreateProductsListDto)
    readonly productsList: ProductsListDto[]
}