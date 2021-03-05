import { ProductsListDto } from './products-list.dto'

export class OrderDto {
    readonly userId: number

    readonly productsList: ProductsListDto[]

    readonly date: Date

    readonly status: string
}