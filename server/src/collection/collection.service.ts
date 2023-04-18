import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection } from 'src/schemas/collection.schema';

@Injectable()
export class CollectionService {
  constructor(
    @InjectModel(Collection.name) private collectionModel: Model<Collection>,
  ) {}
  allCollection() {
    return this.collectionModel.find();
  }

  createCollection(user: any) {
    return this.collectionModel.create(user);
  }
}
