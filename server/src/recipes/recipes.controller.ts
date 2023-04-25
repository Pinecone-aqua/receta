import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('get')
  find() {
    return this.recipesService.allRecipe();
  }

  @Get('get')
  findRecipe(@Query() id: string) {
    console.log(id);

    return this.recipesService.findRecipe(id);
  }

  @Get('get-ids')
  findId() {
    return this.recipesService.allId();
  }

  @Get('get-card')
  findCard() {
    return this.recipesService.cardRecipe();
  }

  @Post('create')
  create(@Body() body: any) {
    // @UseInterceptors(FileInterceptor('image', {
    //   storage: diskStorage
    // }))
    // UploadedFile(@Res() resizeBy, @UploadedFile() file) {
    //   return
    // }
    // uploadFileAndPassValidation(
    // @UploadedFile(
    //     new ParseFilePipe({
    //       validators: [

    //       ]
    //     })
    //   )
    //   file: Express.Multer.File,

    // )
    try {
      const cocktailData = body.cocktailData;
      const img_url = cocktailData.image_url;
      console.log(img_url);
      return this.recipesService.createRecipe(body);
    } catch (e) {
      return e.message;
    }
  }
}
