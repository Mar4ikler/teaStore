import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { AuthService } from "../auth/auth.service";
export declare class ReviewsController {
    private readonly reviewsService;
    private readonly authService;
    constructor(reviewsService: ReviewsService, authService: AuthService);
    create(createReviewDto: CreateReviewDto, token: string): Promise<import(".prisma/client").reviews>;
    findAll(): Promise<import(".prisma/client").reviews[]>;
    findOne(id: string): Promise<import(".prisma/client").reviews>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<import(".prisma/client").reviews>;
    remove(id: string): Promise<import(".prisma/client").reviews>;
}
