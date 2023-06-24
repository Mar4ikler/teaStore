import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
export declare class SubcategoriesController {
    private readonly subcategoriesService;
    constructor(subcategoriesService: SubcategoriesService);
    create(createSubcategoryDto: CreateSubcategoryDto): Promise<import(".prisma/client").subcategories>;
    findAll(): Promise<import(".prisma/client").subcategories[]>;
    findOne(id: string): Promise<import(".prisma/client").subcategories>;
    update(id: string, updateSubcategoryDto: UpdateSubcategoryDto): Promise<import(".prisma/client").subcategories>;
    remove(id: string): Promise<import(".prisma/client").subcategories>;
}
