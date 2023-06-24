import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { PrismaService } from "../prisma.service";
export declare class SubcategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSubcategoryDto: CreateSubcategoryDto): Promise<import(".prisma/client").subcategories>;
    findAll(): Promise<import(".prisma/client").subcategories[]>;
    findOne(id: number): Promise<import(".prisma/client").subcategories>;
    update(id: number, updateSubcategoryDto: UpdateSubcategoryDto): Promise<import(".prisma/client").subcategories>;
    remove(id: number): Promise<import(".prisma/client").subcategories>;
}
