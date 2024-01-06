import express from "express";
import { connection } from "./db.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/ordersRouter.js";

const app = express();

const PORT = 3000 || 8000;

connection();

app.use(express.json());
app.use("/shoppingApp/users", userRouter);
app.use("/shoppingApp/products", productRouter);
app.use("/shoppingApp/cart", cartRouter);
app.use("/shoppingApp/order", orderRouter);

app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});
