import express from "express";

import {
getProductInfo,
	newProduct,
	deleteProduct,
} from "../controllers/productControllers.js";

const productRouter = express.Router();

productRouter.get("/", getProductInfo);
productRouter.post("/addProduct", newProduct);
productRouter.delete("/deleteProduct", deleteProduct);

export default productRouter;
