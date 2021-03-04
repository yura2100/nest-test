import { SpecDto } from './spec.dto'

export class ProductDto {
    readonly name: string
    readonly description: string
    readonly specs: SpecDto[]
}