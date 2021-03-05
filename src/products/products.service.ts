import { Model } from 'mongoose'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { ProductDto } from './dto/product.dto'

@Injectable()
export class ProductsService {
    private readonly logger = new Logger(ProductsService.name)

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) {}

    async findOne(id: string): Promise<Product> {
        this.logger.debug(`Execution database query find product by id`)

        return this.productModel.findById(id)
    }

    async findAll(): Promise<Product[]> {
        this.logger.debug(`Execution database query find all products`)

        return this.productModel.find()
    }

    async findManyByIds(ids: string[]): Promise<Product[]> {
        this.logger.debug(`Execution database query find many products by ids`)

        return this.productModel.find({ '_id': { $in: ids } })
    }

    async create(productDto: ProductDto): Promise<Product> {
        this.logger.debug(`Execution database query create new product`)

        const product = new this.productModel(productDto)
        return product.save()
    }

    async update(id: string, productDto: ProductDto): Promise<Product> {
        this.logger.debug(`Execution database query update product by id`)

        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
    }

    async remove(id: string): Promise<Product> {
        this.logger.debug(`Execution database query remove product by id`)

        return this.productModel.findByIdAndRemove(id)
    }
}
