import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Tool {
  @Prop()
  name: string;

  @Prop({ ref: "Collection" })
  collection_id: string;
}

export const ToolSchema = SchemaFactory.createForClass(Tool);
