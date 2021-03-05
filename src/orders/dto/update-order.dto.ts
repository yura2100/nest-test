import { IsNotEmpty } from 'class-validator'

export class UpdateOrderDto {
    @IsNotEmpty()
    readonly status: string
}