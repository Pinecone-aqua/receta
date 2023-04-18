import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    saved: [{ type: Schema.Types.ObjectId, required: false, ref: "Recipe" }],
    image: { required: false, type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    role: { type: String, required: false, default: "user" }, //admin, moderator, user
    last_login: String,
  },
  {
    collection: "user",
  }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
