import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "src/categories/category.schema";
import { Recipe } from "src/recipes/recipe.schema";
import { Tool } from "src/tools/tools.schema";
import { Collection } from "src/collections/collection.schema";
import { CreateRecipesDto } from "./recipes.create.dto";

@Injectable()
export class RecipesService {
  remove(id: string) {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<Recipe>,
    @InjectModel(Collection.name) private collectionsModel: Model<Collection>,
    @InjectModel(Category.name) private categoriesModel: Model<Category>,
    @InjectModel(Tool.name) private toolsModel: Model<Tool>
  ) {}

  allRecipe() {
    try {
      return this.recipeModel.find();
    } catch (err) {
      return err;
    }
  }

  async findRecipe(id: string) {
    try {
      return await this.recipeModel.findOne({ _id: id });
    } catch (err) {
      return err;
    }
  }

  allId() {
    try {
      return this.recipeModel.find().select({ _id: 1 });
    } catch (err) {
      return err;
    }
  }

  cardRecipe() {
    try {
      return this.recipeModel
        .find()
        .select({ _id: 1, name: 1, categories_id: 1, image_url: 1 });
    } catch (err) {
      return err;
    }
  }

  filterRecipe(name: string) {
    try {
      return this.recipeModel
        .find({ collection_id: name })
        .select({ _id: 1, name: 1, categories_id: 1, image_url: 1 });
    } catch (err) {
      return err;
    }
  }

  filterCateRecipe(name: string) {
    try {
      return this.recipeModel
        .find({ "categories_id.name": { $in: [name] } })
        .select({ _id: 1, name: 1, categories_id: 1, image_url: 1 });
    } catch (err) {
      return err;
    }
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  async remove(id: number) {
    this.recipeModel.delete(filter);
  }

  async createRecipe(recipe: CreateRecipesDto) {
    try {
      //collection find name
      const collection = await this.collectionsModel
        .findOne({
          name: recipe.collection,
        })
        .select({ name: 1 });

      //category find name
      const category = await this.categoriesModel
        .find({
          name: recipe.categories,
        })
        .select({ name: 1 });

      const tool = await this.toolsModel
        .find({
          name: recipe.tools,
        })
        .select({ name: 1 });

      console.log(recipe);

      return this.recipeModel.create({
        name: recipe.name,
        description: recipe.description,
        collection_id: collection.name,
        categories_id: category,
        tools_id: tool,
        how_to: recipe.how_to,
        ingredients: recipe.ingredients,
        alcohol: recipe.alcohol,
        image_url: recipe.image_url,
        video_url: recipe.video_url,
      });
    } catch (err) {
      return err;
    }
  }
}
