import mongoose from "mongoose";
import ProductModel from "./productModels.js";
import userModel from "./usersModels.js";

const { Schema } = mongoose;

const cartSchema = new Schema({
	items: [{productInfo: { type: mongoose.SchemaTypes.ObjectId, ref: ProductModel },quantity: Number}],
	user: { type: mongoose.SchemaTypes.ObjectId, ref: userModel },
});

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
