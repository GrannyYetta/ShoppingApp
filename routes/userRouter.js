import express from "express";
import { jwtAuth } from "../middlewares/jwtAuth.js";

import {
	userDeletion,
	userLogin,
	userRegistration,
	userUpdate,
	accessUserProfile,
} from "../controllers/userControllers.js";
import { hashPassword } from "../middlewares/hashPassword.js";

const userRouter = express.Router();

userRouter.post("/registration", hashPassword, userRegistration);
userRouter.post("/login", userLogin);
userRouter.put("/updateUser", userUpdate);
userRouter.delete("/deleteUser", userDeletion);
userRouter.get("/profile", jwtAuth, accessUserProfile);

export default userRouter;
