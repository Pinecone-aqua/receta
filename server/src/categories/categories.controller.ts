import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { CheckRole } from "src/role/role.decorator";
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
  @CheckRole("MODERATOR", "ADMIN")
  create(@Body() body: any) {
    console.log(body);

    return this.categoriesService.create(body);
  }

  @Delete("delete")
  @CheckRole("MODERATOR", "ADMIN")
  delete(@Query() cate: any) {
    return this.categoriesService.delete(cate);
  }
}
