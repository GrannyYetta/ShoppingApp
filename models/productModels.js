import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
	productname: String,
	description: String,
	inStock: Number,
	category: String,
	price: { type: Number, required: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
