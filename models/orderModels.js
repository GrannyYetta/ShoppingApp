import mongoose from "mongoose";
import userModel from "./usersModels.js";
import ProductModel from "./productModels.js";

const { Schema } = mongoose;

const orderSchema = new Schema({
	items: [{ type: mongoose.SchemaTypes.ObjectId, ref: ProductModel }],
	user: { type: mongoose.SchemaTypes.ObjectId, ref: userModel },
	deliverto: { type: String },
	saved: { type: Boolean },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
