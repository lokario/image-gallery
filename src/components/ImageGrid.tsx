import { Grid2, Button, CircularProgress, Box } from "@mui/material";
import ImageCard from "./ImageCard";
import { useImages } from "../hooks/useImages";

const ImageGrid: React.FC = () => {
	const { images, loadMore, removeImage, loading, hasMore } = useImages();

	if (loading && images.length === 0) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="50vh">
				<CircularProgress />
			</Box>
		);
	}

	return (
		<>
			<Grid2
				container
				spacing={2}>
				{images.map(photo => (
					<Grid2
						key={photo.id}
						>
						<ImageCard
							photo={photo}
							onDelete={removeImage}
						/>
					</Grid2>
				))}
			</Grid2>

			{hasMore && (
				<Box
					display="flex"
					justifyContent="center"
					mt={3}>
					<Button
						variant="contained"
						onClick={loadMore}>
						More Images
					</Button>
				</Box>
			)}
		</>
	);
};

export default ImageGrid;