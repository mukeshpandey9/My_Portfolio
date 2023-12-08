import { Router } from "express";
import {
  createProject,
  getAllProject,
} from "../controllers/project.controller.js";

const router = Router();

router.route("/all").get(getAllProject);
router.route("/new").post(createProject);
export default router;
