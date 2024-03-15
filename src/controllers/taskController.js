import Task from "../models/task.js";

const getAllTask = async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({ tasks: tasks });
};

const createTask = async (req, res) => {
  const { title, description, tags } = req.body;

  if (!title || !description || !tags) {
    return res.status(400).json({ message: "Please provide all details" });
  }

  const task = await Task.create({ ...req.body });

  res.status(201).json({ message: "Task created successfully!" });
};

export default { getAllTask, createTask };
