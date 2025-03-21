import { useImages } from "@/hooks/useImages";
import * as imageService from "@/services/imageAPI";
import { renderHook, act } from "@testing-library/react";

const mockPhotos = Array.from({ length: 24 }, (_, i) => ({
	id: i + 1,
	img_src: `https://picsum.photos/id/${i + 1}/400/300.jpg`,
	earth_date: "2025-03-21",
	camera: { full_name: "Canon Camera" },
}));

jest.spyOn(imageService, "fetchAllMarsPhotos").mockResolvedValue(mockPhotos);

describe("useImages", () => {
	it("should load initial images", async () => {
		const { result } = renderHook(() => useImages());

		expect(result.current.loading).toBe(true);

		await act(async () => {});

		expect(result.current.loading).toBe(false);
		expect(result.current.images).toHaveLength(12);
	});

	it("should load more images on demand", async () => {
		const { result } = renderHook(() => useImages());

		await act(async () => {});

		act(() => {
			result.current.loadMore();
		});

		expect(result.current.images).toHaveLength(24);
		expect(result.current.hasMore).toBe(false);
	});

	it("should remove image by id", async () => {
		const { result } = renderHook(() => useImages());

		await act(async () => {});

		const idToRemove = result.current.images[0].id;

		act(() => {
			result.current.removeImage(idToRemove);
		});

		expect(result.current.images.some(img => img.id === idToRemove)).toBe(false);
	});
});
