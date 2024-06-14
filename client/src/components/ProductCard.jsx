import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem" }}>
      <CardContent>
        <Typography variant="h4" component="div">
          Product Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Category name {/* Category: {category} */}
        </Typography>
        <Typography variant="body2">Seller: Name </Typography>
        {/* {sellerName} */}
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/view/id:${4}`}>View More</Link></Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
