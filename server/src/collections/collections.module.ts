import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Collection,
  CollectionSchema,
} from 'src/collections/collection.schema';
import { CollectionController } from './collections.controller';
import { CollectionService } from './collections.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Collection.name, schema: CollectionSchema },
    ]),
  ],
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
