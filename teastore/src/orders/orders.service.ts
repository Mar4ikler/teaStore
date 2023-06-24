import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.orders.create({
      data: {
        ...createOrderDto
      }
    });
  }

  async createInCart(createOrderDto: CreateOrderDto) {
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

  async findAllOrders(id: number) {
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

  async findAllOrdersInCart(id: number) {
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

  async findOne(id: number) {
    return await this.prisma.orders.findUnique({
      where: {
        order_id: id
      }
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.orders.update({
      where: {
        order_id: id
      },
      data: {
        ...updateOrderDto
      }
    });
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto) {
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

  async remove(id: number) {
    return await this.prisma.orders.delete({
      where: {
        order_id: id
      }
    });
  }

  async removeFromCart(id: number, userId: number) {
    return await this.prisma.orders.deleteMany({
      where: {
        order_id: id,
        user_id: userId,
        isBuying: "false"
      }
    });
  }
}
