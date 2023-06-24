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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrderDto) {
        return await this.prisma.orders.create({
            data: Object.assign({}, createOrderDto)
        });
    }
    async createInCart(createOrderDto) {
        return await this.prisma.orders.create({
            data: {
                user_id: createOrderDto.user_id,
                product_id: createOrderDto.product_id,
                quantity: createOrderDto.quantity,
                price: createOrderDto.price,
                orderDate: "",
                isBuying: "false"
            }
        });
    }
    async findAll() {
        return await this.prisma.orders.findMany();
    }
    async findAllOrders(id) {
        return await this.prisma.orders.findMany({
            select: {
                order_id: true,
                user_id: true,
                product_id: true,
                quantity: true,
                price: true,
                orderDate: true,
                isBuying: true,
                products: {
                    select: {
                        product_name: true,
                        productImage: true
                    }
                }
            },
            where: {
                user_id: id,
                isBuying: "true"
            }
        });
    }
    async findAllOrdersInCart(id) {
        return await this.prisma.orders.findMany({
            select: {
                order_id: true,
                user_id: true,
                product_id: true,
                quantity: true,
                price: true,
                orderDate: true,
                isBuying: true,
                products: {
                    select: {
                        product_name: true,
                        productImage: true
                    }
                }
            },
            where: {
                user_id: id,
                isBuying: "false"
            }
        });
    }
    async findOne(id) {
        return await this.prisma.orders.findUnique({
            where: {
                order_id: id
            }
        });
    }
    async update(id, updateOrderDto) {
        return await this.prisma.orders.update({
            where: {
                order_id: id
            },
            data: Object.assign({}, updateOrderDto)
        });
    }
    async updateOrder(id, updateOrderDto) {
        return await this.prisma.orders.updateMany({
            where: {
                user_id: id,
                isBuying: "false"
            },
            data: {
                orderDate: updateOrderDto.orderDate,
                isBuying: "true"
            }
        });
    }
    async remove(id) {
        return await this.prisma.orders.delete({
            where: {
                order_id: id
            }
        });
    }
    async removeFromCart(id, userId) {
        return await this.prisma.orders.deleteMany({
            where: {
                order_id: id,
                user_id: userId,
                isBuying: "false"
            }
        });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map