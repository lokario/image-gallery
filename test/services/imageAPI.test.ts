import axios from "axios";
import { fetchAllMarsPhotos } from "@/services/imageAPI";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchAllMarsPhotos", () => {
	it("should return an array of MarsPhoto objects", async () => {
		mockedAxios.get.mockResolvedValueOnce({
			data: {
				photos: [
					{
						id: 1,
						img_src: "https://picsum.photos/400/300.jpg",
						earth_date: "2025-03-21",
						camera: { full_name: "Canon Camera" },
					},
				],
			},
		});

		const photos = await fetchAllMarsPhotos();
		expect(photos).toHaveLength(1);
		expect(photos[0].camera.full_name).toBe("Canon Camera");
	});

	it("should return an empty array on error", async () => {
		mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));
		const photos = await fetchAllMarsPhotos();
		expect(photos).toEqual([]);
	});
});
