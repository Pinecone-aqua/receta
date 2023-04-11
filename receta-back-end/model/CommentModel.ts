import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    text: String,
    writer: [{ type: Schema.Types.ObjectId, required: true, ref: "user" }],
    recipe_id: [{ type: Schema.Types.ObjectId, required: true, ref: "recipe" }],
  },
  {
    collection: "comment",
  }
);

const shopModel = mongoose.model("Comment", commentSchema);

export default shopModel;
