import orderModel from "../models/orderModels.js";
import cartModel from "../models/cartModels.js";

export const purchaseOrder = async (req, res) => {

    if(req.payment){

	const { cartId, cartItems, userId } = req.body;

	try {
        
		const order = await orderModel.create({
			items: cartItems,
			user: userId,
		});

		if (order) {
			const cart = await cartModel.findByIdAndDelete(cartId)
            console.log("cart deleted",cart)
            res.json({ msg: "order placed", order });
		}

		
	} catch (err) {
		res.json({ msg: "purchase not possible", err });
	}
}
};
