import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/schemas/category.schema';
import { Collection, CollectionSchema } from 'src/schemas/collection.schema';
import { Recipe, RecipeSchema } from 'src/schemas/recipe.schema';
import { Tool, ToolSchema } from 'src/schemas/tools.schema';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
    MongooseModule.forFeature([
      { name: Collection.name, schema: CollectionSchema },
    ]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    MongooseModule.forFeature([{ name: Tool.name, schema: ToolSchema }]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
