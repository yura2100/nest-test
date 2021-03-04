import { ProductsListDto } from './products-list.dto'

export class CreateOrderDto {
    readonly userId: number
    readonly productsList: ProductsListDto[]
    readonly date?: Date
    readonly status: string
}