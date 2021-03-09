import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class SpecDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly key: string

    @ApiProperty()
    @IsNotEmpty()
    readonly value: string
}