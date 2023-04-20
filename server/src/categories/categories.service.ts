import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/schemas/category.schema';
import { Collection } from 'src/schemas/collection.schema';
import { CreateCategoriesDto } from './categories.create.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoriesModel: Model<Category>,
    @InjectModel(Collection.name) private collectionsModel: Model<Collection>,
  ) {}
  all() {
    try {
      return this.categoriesModel.find().populate('collection_id');
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
        .select({ _id: 1 });

      return this.categoriesModel.create({
        name: category.name,
        collection_id: collection._id,
      });
    } catch (err) {
      return err;
    }
  }
}
