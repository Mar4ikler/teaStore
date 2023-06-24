import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "../prisma.service";
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<import(".prisma/client").orders>;
    createInCart(createOrderDto: CreateOrderDto): Promise<import(".prisma/client").orders>;
    findAll(): Promise<import(".prisma/client").orders[]>;
    findAllOrders(id: number): Promise<{
        user_id: number;
        products: {
            product_name: string;
            productImage: string;
        };
        price: import("@prisma/client/runtime").Decimal;
        product_id: number;
        quantity: number;
        orderDate: string;
        isBuying: string;
        order_id: number;
    }[]>;
    findAllOrdersInCart(id: number): Promise<{
        user_id: number;
        products: {
            product_name: string;
            productImage: string;
        };
        price: import("@prisma/client/runtime").Decimal;
        product_id: number;
        quantity: number;
        orderDate: string;
        isBuying: string;
        order_id: number;
    }[]>;
    findOne(id: number): Promise<import(".prisma/client").orders>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import(".prisma/client").orders>;
    updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    remove(id: number): Promise<import(".prisma/client").orders>;
    removeFromCart(id: number, userId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
