import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from "../auth/decorators/jwtGuard";
import { AuthService } from "../auth/auth.service";

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService, private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @Post('/addToCart/:token')
  async addToCart(@Body() createOrderDto: CreateOrderDto, @Param('token') token: string) {
    const payload = await this.authService.getPayloadFromToken(token);
    createOrderDto.user_id = +payload.sub;
    return await this.ordersService.createInCart(createOrderDto);
  }

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(+id);
  }

  @Get('ord/:token')
  async findAllInCabinet(@Param('token') token: string) {
    const payload = await this.authService.getPayloadFromToken(token);
    return await this.ordersService.findAllOrders(+payload.sub);
  }

  @Get('ordInCart/:token')
  async findAllInCart(@Param('token') token: string) {
    const payload = await this.authService.getPayloadFromToken(token);
    return await this.ordersService.findAllOrdersInCart(+payload.sub);
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return await this.ordersService.update(+id, updateOrderDto);
  }

  @Patch('uptToBuy/:token')
  async updateToBuy(@Param('token') token: string, @Body() updateOrderDto: UpdateOrderDto) {
    const payload = await this.authService.getPayloadFromToken(token);
    return await this.ordersService.updateOrder(+payload.sub, updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(+id);
  }

  @Delete('removeCart/:id/:token')
  async removeCart(@Param('id') id: string, @Param('token') token: string) {
    const payload = await this.authService.getPayloadFromToken(token);
    return await this.ordersService.removeFromCart(+id, +payload.sub);
  }

}
