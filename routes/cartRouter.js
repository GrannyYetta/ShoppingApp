import express from "express";
import {
	createCart,
	deleteCart,
	getCart,
} from "../controllers/cartControllers.js";

const cartRouter = express.Router();

cartRouter.route("/").get(getCart).post(createCart).delete(deleteCart);

//params => cart/:id
//query => cart?id=8u23402

export default cartRouter;
