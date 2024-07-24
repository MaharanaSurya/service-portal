import express from "express";
import { getAllUser, signup, signin } from "../controller/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/getalluser", getAllUser);

export default router;
