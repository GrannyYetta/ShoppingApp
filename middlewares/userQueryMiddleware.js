export const getUser = (req, res, next) => {
	const { username } = req.params;
	console.log("username", username);

	const query = {};

	req.userQuery = query;
	next();
};
