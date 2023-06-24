import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { PrismaService } from "../prisma.service";
export declare class ReviewsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto): Promise<import(".prisma/client").reviews>;
    findAll(): Promise<import(".prisma/client").reviews[]>;
    findOne(id: number): Promise<import(".prisma/client").reviews>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<import(".prisma/client").reviews>;
    remove(id: number): Promise<import(".prisma/client").reviews>;
}
