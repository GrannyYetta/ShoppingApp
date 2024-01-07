import userModel from "../models/usersModels.js";
import bcrypt from "bcrypt";

export const userRegistration = async (req, res) => {
	const { firstname, username, lastname, email, password } = req.body;

	const generatedUserName =
		firstname + lastname + Math.floor(Math.random() * 50);
	try {
		const user = await userModel.create({
			firstname: firstname,
			lastname: lastname,
			password: password,
			email: email,
			username: generatedUserName,
		});
		res.json({
			msg: `You have successfully created a user under the alias ${generatedUserName} Welcome to the shopping app.`,
			user: user.username,
		});
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const userLogin = async (req, res) => {
	const { identifier, password } = req.body;

	try {
		const myQueryString = identifier.includes("@")
			? { email: identifier }
			: { username: identifier };

		const user = await userModel.findOne(myQueryString);

		if (user) {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					res.json({ msg: `You have successfully logged in`, user });
				} else {
					res.json({ msg: `User unknown` });
				}
			});
		} else {
			res.send(
				"This user is not in our database. Please create a user to proceed."
			);
		}

		res.json({ msg: `You have successfully logged in.`, user });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const userUpdate = async (req, res) => {
	const { identifier, password } = req.body;

	try {
		const myQueryString = identifier.includes("@")
			? { email: identifier }
			: { username: identifier };

		const user = await userModel.updateOne(myQueryString);
		res.json({ msg: `${user} has been successfully updated`, user });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const userDeletion = async (req, res) => {
	const { id } = req.body;
	try {
		const user = await userModel.findByIdAndDelete(id);
		res.json({ msg: `The user has been successfully deleted.` });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const accessUserProfile = async (req, res) => {
const user = req.userStatus;

if (data != "authenticated") {
	res.json ({msg: "not authenticated for this aciton"})
}

res.json({msg: user})
};
