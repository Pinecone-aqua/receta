import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Collection } from "src/collections/collection.schema";
import { CreateCategoriesDto } from "./categories.create.dto";
import { Category } from "./category.schema";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoriesModel: Model<Category>,
    @InjectModel(Collection.name) private collectionsModel: Model<Collection>
  ) {}
  all() {
    try {
      return this.categoriesModel.find();
    } catch (err) {
      return err;
    }
  }

  async filterCategory(name: string) {
    try {
      return await this.categoriesModel.find({
        collection_name: name,
      });
      return this.categoriesModel.find();
    } catch (err) {
      return err;
    }
  }

  async create(category: CreateCategoriesDto) {
    try {
      const collection = await this.collectionsModel
        .findOne({
          name: category.collection,
        })
        .select({ name: 1 });

      return this.categoriesModel.create({
        name: category.name,
        collection_name: collection.name,
      });
    } catch (err) {
      return err;
    }
  }
}
