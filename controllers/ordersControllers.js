import orderModel from "../models/orderModels.js";

export const placeOrder = async (req, res) => {
	const { body } = req;

	try {
		const order = await orderModel.create({
			items: items,
			user: user,
			deliverto: deliverto,
			saved: saved,
		});
	} catch (error) {
		res.status(500).json(error.message);
	}
};
