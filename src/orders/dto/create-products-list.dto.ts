import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateProductsListDto {
    @IsNotEmpty()
    readonly productId: string

    @IsNumber()
    readonly quantity: number
}
