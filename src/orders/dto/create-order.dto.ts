import { ProductsListDto } from './products-list.dto'
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateProductsListDto } from './create-products-list.dto'

export class CreateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    readonly userId: number

    @ValidateNested({ each: true })
    @Type(() => CreateProductsListDto)
    readonly productsList: ProductsListDto[]
}