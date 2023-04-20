import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Collection } from './collection.schema';

@Schema()
export class Category {
  @Prop()
  name: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Collection' })
  collection_id: Collection;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
