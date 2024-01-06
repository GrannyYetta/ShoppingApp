import cartModel from "../models/cartModels.js";

export const createCart = async (req, res) => {
	const { items, user } = req.body;

	try {
		const cart = await cartModel.create({ items: items, user: user });

		res.json({ msg: "cart added", cart });
	} catch (error) {
		res.status(500).json(error.message);
	}
};

export const getCart = async (req, res) => {
	const { userId } = req.body;

	const string = "peter";

	try {
		const cart = await cartModel
			.findOne({ user: userId })
			.populate(["items.productInfo", "user"]);
		res.json({ msg: `this is your cart`, cart });
	} catch (error) {
		res.status(500).json(message.error);
	}
};


//is this really a controller for a route?
export const deleteCart = async (req, res) => {
	const { id } = req.body;

	try {
		const cart = cartModel.findByIdAndDelete(id);
		res.json({ msg: `Your cart has been successfully deleted`, cart });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
