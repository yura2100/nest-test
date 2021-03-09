import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly status: string
}