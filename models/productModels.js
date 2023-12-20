import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
	name: String,
	description: String,
	quantity: Number,
	category: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
