import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('get')
  find() {
    return this.categoriesService.all();
  }

  @Post('create')
  create(@Body() body: any) {
    return this.categoriesService.create(body);
  }
}
