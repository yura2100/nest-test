import { IsNotEmpty } from 'class-validator'

export class SpecDto {
    @IsNotEmpty()
    readonly key: string

    @IsNotEmpty()
    readonly value: string
}