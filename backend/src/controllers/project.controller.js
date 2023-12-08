import { Project } from "../models/project.model";
import cloudinary from "cloudinary";

const createProject = async (req, res) => {
  try {
    const { title, description, link, github, image } = req.body;

    if (!title || !description || !link || !github || !image) {
      return res
        .status(400)
        .json({ success: false, message: "Provide all the details" });
    }

    let result = await cloudinary.v2.uploader.upload(image, {
      folder: "projects",
    });

    const project = Project.create({
      title,
      description,
      link,
      github,
      image: result?.url,
    });

    if (!project) {
      return res
        .status(500)
        .json({ success: false, message: "Error In Creating Project" });
    }
    res
      .status(201)
      .json({ success: true, message: "Project Created Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error in creating project",
    });
  }
};

// Get All Project

const getAllProject = async (req, res) => {
  try {
    const projects = Project.find({});

    if (!project) {
      return res
        .status(200)
        .json({ success: false, message: "No Project Found" });
    }
    res.status(200).json({
      success: true,
      message: "Project fetched Successfully",
      projects,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error in Getting project",
    });
  }
};

// Delete Project

const deleteProject = async (req, res) => {
  try {
    const { id } = req.body;
    const project = await Project.findById(id);

    if (!project) {
      return res
        .status(200)
        .json({ success: false, message: "No Project Found" });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error in Deleting project",
    });
  }
};

export { createProject, getAllProject, deleteProject };
