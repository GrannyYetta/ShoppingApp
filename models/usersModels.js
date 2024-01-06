import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
	firstname: String,
	lastname: String,
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, min: 8 },
	username: { type: String, required: true, min: 6 },
	isActive: { type: Boolean, default: true },
	created_at: { type: Date, default: Date.now },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
