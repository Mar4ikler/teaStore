"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ReviewsService = class ReviewsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createReviewDto) {
        return await this.prisma.reviews.create({
            data: Object.assign({}, createReviewDto)
        });
    }
    async findAll() {
        return await this.prisma.reviews.findMany();
    }
    async findOne(id) {
        return await this.prisma.reviews.findUnique({
            where: {
                review_id: id
            }
        });
    }
    async update(id, updateReviewDto) {
        return await this.prisma.reviews.update({
            where: {
                review_id: id
            },
            data: Object.assign({}, updateReviewDto)
        });
    }
    async remove(id) {
        return await this.prisma.reviews.delete({
            where: {
                review_id: id
            }
        });
    }
};
ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map