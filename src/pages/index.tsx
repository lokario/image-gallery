import { Container, Typography, Box } from "@mui/material";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
	return (
		<Container
			maxWidth="lg"
			sx={{ py: 4 }}>
			<Box
				textAlign="center"
				mb={4}>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom>
					Mars Rover Image Gallery
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary">
					Explore photos taken by NASA’s Curiosity rover on Mars
				</Typography>
			</Box>
			<ImageGrid />
		</Container>
	);
}
