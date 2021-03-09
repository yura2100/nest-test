import { SpecDto } from './spec.dto'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class ProductDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string

    @ApiProperty()
    @IsNotEmpty()
    readonly description: string

    @ApiProperty({
        required: false,
        default: [],
        type: [SpecDto]
    })
    @ValidateNested({ each: true })
    @Type(() => SpecDto)
    readonly specs: SpecDto[]
}
