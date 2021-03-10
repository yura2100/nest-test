import { Model } from 'mongoose'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './product.schema'
import { ProductDto } from './dto/product.dto'
import { SpecDto } from './dto/spec.dto'

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

        return this.productModel.find({ _id: { $in: ids } })
    }

    async findManyBySpecs(specs: SpecDto[]): Promise<Product[]> {
        this.logger.debug(`Execution database query find many products by specs`)

        const elemMatchArray = specs.map((value) => ({ $elemMatch: value }))

        return this.productModel.find({
            specs: { $all: elemMatchArray }
        })
    }

    async groupAndCountByCategory() {
        this.logger.debug(`Execution database query count products by category`)

        return this.productModel.aggregate([
            {
                $group: { _id: '$category', total: { $sum: 1 } }
            }
        ])
    }

    async groupAndCountBySpecs(specs: SpecDto[]) {
        this.logger.debug(`Execution database query count products by specs`)

        const elemMatchArray = specs.map((value) => ({ $elemMatch: value }))

        return this.productModel.count({
            specs: { $all: elemMatchArray }
        })
    }

    async create(productDto: ProductDto): Promise<Product> {
        this.logger.debug(`Execution database query create new product`)

        const product = new this.productModel(productDto)
        return product.save()
    }

    async update(id: string, productDto: ProductDto): Promise<Product> {
        this.logger.debug(`Execution database query update product by id`)

        return this.productModel.findByIdAndUpdate(id, productDto, {
            new: true
        })
    }

    async remove(id: string): Promise<Product> {
        this.logger.debug(`Execution database query remove product by id`)

        return this.productModel.findByIdAndRemove(id)
    }
}
