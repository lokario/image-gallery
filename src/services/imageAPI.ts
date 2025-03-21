import axios from "axios";

const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const API_KEY = "DEMO_KEY";

export interface MarsPhoto {
	id: number;
	img_src: string;
	earth_date: string;
	camera: { full_name: string };
}

export const fetchAllMarsPhotos = async (sol: number = 1000): Promise<MarsPhoto[]> => {
	try {
		const {data:{ photos }} = await axios.get(API_URL, {
			params: { sol, api_key: API_KEY },
		});

		return photos;
	} catch (error) {
		console.error("Error fetching Mars photos:", error);
		return [];
	}
};