import { ProductsListDto } from './products-list.dto'

export class OrderDto {
    readonly userId: string

    readonly productsList: ProductsListDto[]

    readonly date: Date

    readonly status: string
}