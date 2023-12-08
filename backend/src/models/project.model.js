import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Project Title is Required"],
    },
    description: {
      type: String,
      required: [true, "Project Description is Required"],
    },
    image: {
      type: String,
      required: [true, "Project image is Required"],
    },
    github: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
