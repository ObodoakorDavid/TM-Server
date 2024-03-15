import express from "express";

const router = express.Router();

import taskController from "../controllers/taskController.js";
import methodNotAllowed from "../utils/methodNotAllowed.js";

router
  .route("/")
  .get(taskController.getAllTask)
  .post(taskController.createTask)
  .all(methodNotAllowed);

export default router;
