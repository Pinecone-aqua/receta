import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Categories {
  @Prop()
  name: string;
  @Prop({ ref: 'collections' })
  collection_id: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
