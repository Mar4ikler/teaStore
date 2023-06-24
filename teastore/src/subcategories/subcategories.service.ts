import { Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { PrismaService } from "../prisma.service";

@Injectable()
export class SubcategoriesService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(createSubcategoryDto: CreateSubcategoryDto) {
    return await this.prisma.subcategories.create({
      data: {
        ...createSubcategoryDto
      }
    });
  }

  async findAll() {
    return await this.prisma.subcategories.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.subcategories.findUnique({
      where: {
        category_id: id
      }
    });
  }

  async update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return await this.prisma.subcategories.update({
      where: {
        category_id: id
      },
      data: {
        ...updateSubcategoryDto
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.subcategories.delete({
      where: {
        category_id: id
      }
    });
  }
}
