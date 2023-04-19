import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from 'src/schemas/categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoriesModel: Model<Categories>,
  ) {}
  all() {
    return this.categoriesModel.find();
  }

  create(category: any) {
    return this.categoriesModel.create(category);
  }
}
