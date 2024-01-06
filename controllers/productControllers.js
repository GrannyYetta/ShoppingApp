import ProductModel from "../models/productModels.js";

export const getProductInfo = async (req, res) => {
	const { id } = req.query;
	console.log("query", id);

	const findMethod = id === undefined ? ProductModel.find(): ProductModel.findById(id)

	try {
		const product = await findMethod;
		res.json(product);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

export const newProduct = async (req, res) => {
	const { productname, description, quantity, category, price } = req.body;
	try {
		const product = await ProductModel.create({
			productname: productname,
			description: description,
			quantity: quantity,
			category: category,
			price: price,
		});

		console.log("product", product);
		res.send(`${product} has been added to our database`);
	} catch (error) {
		res.status(500).json({
			msg: "unfortunately, your product could not be added to the database",
		});
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const product = await ProductModel.deleteOne(req.productQuery);
		res.json(product);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
