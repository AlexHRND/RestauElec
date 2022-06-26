import { RequestHandler } from "express";

import { User } from "../models/user/user";

export const createToDo: RequestHandler = async (req, res, next) => {
  var user = await User.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "User created successfully", data: User });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: User | null = await User.findByPk(id);
  await User.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: deletedTodo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allUser: User[] = await User.findAll();
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: allUser });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: User });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await User.update({ ...req.body }, { where: { id } });
  const updatedUser: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updatedUser });
};