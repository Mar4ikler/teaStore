import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").products>;
    findAll(): Promise<import(".prisma/client").products[]>;
    findOne(id: string): Promise<import(".prisma/client").products>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").products>;
    remove(id: string): Promise<import(".prisma/client").products>;
}
