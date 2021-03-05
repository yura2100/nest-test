import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ProductsListDto } from '../dto/products-list.dto'

export type OrderDocument = Order & Document

@Schema()
export class Order {
    @Prop({
        required: true
    })
    userId: number

    @Prop({
        type: [
            {
                productId: { type: String, required: true },
                name: { type: String, required: true },
                quantity: { type: Number, required: true },
            }
        ],
        required: true
    })
    productsList: ProductsListDto[]

    @Prop({
        type: Date,
        default: Date.now()
    })
    date: Date

    @Prop()
    status: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)
