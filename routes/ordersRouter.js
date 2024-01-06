import express from "express";
import { purchaseOrder } from "../controllers/orderController.js";
import { paymentMiddleware } from "../middlewares/paymentMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/purchase", paymentMiddleware, purchaseOrder);

export default orderRouter;
