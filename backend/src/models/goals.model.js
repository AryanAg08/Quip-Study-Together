import mongoose, { Schema } from "mongoose";

const goalSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    goals: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          completed: {
            type: Boolean,
            default: false,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", goalSchema);

export default Todo;