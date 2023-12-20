import { trusted } from "mongoose";
import ProductModel from "../models/productModels";

export const singleProduct = async (req, res) => {
	const query = req.productQuery;

	try {
		const product = await ProductModel.findOne(query);
		res.json(product);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

export const allProducts = async (req, res) => {
	try {
		const products = await ProductModel.find();
	} catch (error) {
		res.status(500).json(error.message);
	}
};

export const newProduct = async (req, res) => {
	const { body } = req;
	try {
		const product = await ProductModel.create({
			name: "Apples",
			description: "overrated fruit",
			quantity: 5,
			category: "food",
		});

		console.log("product", product);
		res.send(`${product} has been added to our database`);
	} catch (error) {}
};

export const deleteProduct = async (req, res) => {
	try {
		const product = await ProductModel.deleteOne(req.productQuery);
		res.json(product);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
