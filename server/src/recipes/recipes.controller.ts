import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Controller("recipes")
export class RecipesController {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly cloudinary: CloudinaryService
  ) {}

  @Get("all")
  find() {
    return this.recipesService.allRecipe();
  }

  @Get("get")
  findRecipe(@Query("id") id: string) {
    return this.recipesService.findRecipe(id);
  }

  @Get("get-ids")
  findId() {
    return this.recipesService.allId();
  }

  @Get("get-card")
  findCard() {
    return this.recipesService.cardRecipe();
  }

  @Get("filter")
  filter(@Query("name") name: string) {
    return this.recipesService.filterRecipe(name);
  }

  @Get("filter-category")
  filterCategory(@Query("name") name: string) {
    return this.recipesService.filterCateRecipe(name);
  }

  @Post("create")
  @UseInterceptors(FileInterceptor("file"))
  async create(
    @Body() body: any,
    @UploadedFile()
    file: any
  ) {
    // )
    try {
      const response = await this.cloudinary.uploadImage(file);
      console.log("res:", response);
      console.log("body:");

      const data = await {
        ...JSON.parse(body.newRecipe),
        image_url: response?.secure_url,
      };
      return this.recipesService.createRecipe(data);
    } catch (e) {
      return e.message;
    }
  }
}
