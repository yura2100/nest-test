import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { ProductDto } from './dto/product.dto'

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) {}

    async findOne(id: string): Promise<Product> {
        return this.productModel.findById(id)
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find()
    }

    async create(productDto: ProductDto): Promise<Product> {
        const product = new this.productModel(productDto)
        return product.save()
    }

    async update(id: string, productDto: ProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }
}
