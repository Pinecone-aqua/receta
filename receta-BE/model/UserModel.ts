import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    // saved: [{ type: Schema.Types.ObjectId, required: false, ref: "Recipe" }],
    image: { required: false, type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, required: true }, //admin moderator user , default - user

    // password: {
    //   type: String,
    //   required: true,
    //   unique: false,
    // },
    // last_login: String,
    // created_at: Date,
    // updated_at: Date,
  },
  {
    collection: "users",
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
