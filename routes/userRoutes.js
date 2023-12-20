import express from "express";

import {
	userDeletion,
	userLogin,
	userRegistration,
	userUpdate,
} from "../controllers/userControllers.js";
import { hashPassword } from "../middlewares/hasPassword.js";

const userRouter = express.Router();

userRouter.post("/registration", hashPassword, userRegistration);
userRouter.post("/login", userLogin);
userRouter.put("/updateUser", userUpdate);
userRouter.delete("/deleteUser", userDeletion);

export default userRouter;
