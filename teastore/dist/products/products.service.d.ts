import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "../prisma.service";
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").products>;
    findAll(): Promise<import(".prisma/client").products[]>;
    findOne(id: number): Promise<import(".prisma/client").products>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").products>;
    remove(id: number): Promise<import(".prisma/client").products>;
}
