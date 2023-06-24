import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthService } from "../auth/auth.service";
export declare class OrdersController {
    private readonly ordersService;
    private readonly authService;
    constructor(ordersService: OrdersService, authService: AuthService);
    create(createOrderDto: CreateOrderDto): Promise<import(".prisma/client").orders>;
    addToCart(createOrderDto: CreateOrderDto, token: string): Promise<import(".prisma/client").orders>;
    findAll(): Promise<import(".prisma/client").orders[]>;
    findOne(id: string): Promise<import(".prisma/client").orders>;
    findAllInCabinet(token: string): Promise<{
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
    findAllInCart(token: string): Promise<{
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
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import(".prisma/client").orders>;
    updateToBuy(token: string, updateOrderDto: UpdateOrderDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    remove(id: string): Promise<import(".prisma/client").orders>;
    removeCart(id: string, token: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
