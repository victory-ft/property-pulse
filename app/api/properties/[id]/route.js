import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
	try {
		await connectDB();

		const property = await Property.findById(params.id);

		if (!property) {
			return new Response("Property Not Found", { status: 404 });
		}

		return new Response(JSON.stringify(property));
	} catch (error) {
		return new Error(`Error: ${error}`, { status: 500 });
	}
};
