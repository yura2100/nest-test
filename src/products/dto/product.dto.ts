import { SpecDto } from './spec.dto'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class ProductDto {
    @IsNotEmpty()
    readonly name: string

    @IsNotEmpty()
    readonly description: string

    @ValidateNested({ each: true })
    @Type(() => SpecDto)
    readonly specs: SpecDto[]
}
