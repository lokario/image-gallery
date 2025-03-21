import { Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { MarsPhoto } from "../../services/imageAPI";

interface ImageCardProps {
	photo: MarsPhoto;
	onDelete: (id: number) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, onDelete }) => {
	return (
		<Card>
			<CardMedia
				component="img"
				height="200"
				image={photo.img_src}
				alt="Mars Photo"
			/>
			<CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<Typography
					variant="body2"
					color="text.secondary">
					{photo.camera.full_name} – {photo.earth_date}
				</Typography>
				<IconButton
					onClick={() => onDelete(photo.id)}
					size="small"
					color="error">
					<DeleteIcon />
				</IconButton>
			</CardContent>
		</Card>
	);
};

export default ImageCard;