import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(createReviewDto: CreateReviewDto) {
    return await this.prisma.reviews.create({
      data: {
        ...createReviewDto
      }
    });
  }

  async findAll() {
    return await this.prisma.reviews.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.reviews.findUnique({
      where: {
        review_id: id
      }
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.prisma.reviews.update({
      where: {
        review_id: id
      },
      data: {
        ...updateReviewDto
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.reviews.delete({
      where: {
        review_id: id
      }
    });
  }
}
