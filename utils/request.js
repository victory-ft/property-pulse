const apiDomain = `${process.env.NEXT_PUBLIC_API_DOMAIN}` || null;

//Find all properties
async function fetchProperties() {
	try {
		if (!apiDomain) {
			return [];
		}
		const res = await fetch(`${apiDomain}/properties`);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return res.json();
	} catch (error) {
		console.error(error);
		return [];
	}
}

//Find single property
async function fetchProperty(id) {
	try {
		if (!apiDomain) {
			return [];
		}
		const res = await fetch(`${apiDomain}/properties/${id}`);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return res.json();
	} catch (error) {
		console.error(error);
		return [];
	}
}

export { fetchProperties, fetchProperty };
