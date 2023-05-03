import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get("get")
  find() {
    return this.categoriesService.all();
  }

  @Get("filter")
  filterRecipe(@Query("name") name: string) {
    return this.categoriesService.filterCategory(name);
  }

  @Post("create")
  create(@Body() body: any) {
    console.log(body);

    return this.categoriesService.create(body);
  }
}
