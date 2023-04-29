import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  picture: string;

  @Prop({ default: "CLIENT" })
  role: "CLIENT" | "ADMIN" | "MODERATOR";
}

export const UserSchema = SchemaFactory.createForClass(User);
