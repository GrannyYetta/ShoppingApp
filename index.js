import express from "express";
import { connection } from "./db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

const PORT = 3000 || 8000;

connection();

app.use(express.json());
app.use("/shoppingApp/users", userRouter);

app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});
