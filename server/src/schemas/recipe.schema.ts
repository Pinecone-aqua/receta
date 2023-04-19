import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Recipe {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  how_to: object[];
  @Prop()
  ingredients: object[];
  @Prop()
  image_url: string;
  @Prop()
  video_url: string;
  @Prop({ ref: 'Collection' })
  collection_id: string;
  @Prop({ ref: 'Category' })
  categories_id: string[];
  @Prop({ ref: 'Tool' })
  tools_id: string[];
  @Prop()
  alcohol: boolean;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
