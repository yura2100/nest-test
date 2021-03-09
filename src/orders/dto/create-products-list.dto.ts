import { IsNotEmpty, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateProductsListDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly productId: string

    @ApiProperty()
    @IsNumber()
    readonly quantity: number
}
