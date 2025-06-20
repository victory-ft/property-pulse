import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
	mongoose.set("strictQuery", false);

	//if database is already connected, don't connect again
	if (connected) {
		console.log("MongoDB is already connected.");
		return;
	}

	//connect to MongoDB
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		connected = true;
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
