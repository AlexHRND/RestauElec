import { Router } from "express";

import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
  getUserById,
  logUser,
  createRestaurantMan,
  createDeliverer,
} from "../controller/userController";

const router = Router();
//register
router.post("/client", createUser);
router.post("/restaurateur", createRestaurantMan);
router.post("/livreur", createDeliverer);

router.post("/login",logUser);

router.get("/", getAllUser);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;