import { useEffect, useState } from "react";
import { MarsPhoto, fetchAllMarsPhotos } from "../services/imageAPI";

const IMAGES_PER_PAGE = 12;

export const useImages = () => {
	const [allImages, setAllImages] = useState<MarsPhoto[]>([]);
	const [visibleImages, setVisibleImages] = useState<MarsPhoto[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadImages = async () => {
			setLoading(true);
			const photos = await fetchAllMarsPhotos();
			setAllImages(photos);
			setVisibleImages(photos.slice(0, IMAGES_PER_PAGE));
			setLoading(false);
		};

		loadImages();
	}, []);

	const loadMore = () => {
		const nextPage = page + 1;
		const nextImages = allImages.slice(0, nextPage * IMAGES_PER_PAGE);
		setVisibleImages(nextImages);
		setPage(nextPage);
	};

	const removeImage = (id: number) => {
		const filtered = visibleImages.filter(img => img.id !== id);
		setVisibleImages(filtered);
	};

	return {
		images: visibleImages,
		loadMore,
		removeImage,
		loading,
		hasMore: visibleImages.length < allImages.length,
	};
};
