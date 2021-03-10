import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { SpecDto } from './dto/spec.dto'

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({
        required: true
    })
    name: string

    @Prop({
        required: true
    })
    description: string

    @Prop({
        type: [
            {
                key: { type: String, required: true },
                value: { type: String, required: true }
            }
        ],
        default: []
    })
    specs: SpecDto[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)
