import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({
  productName,
  categoryName,
  sellerName,
  productId,
  productImage,
}) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        height="140"
        image={productImage}
        alt={`${productName}`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {categoryName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Seller: {sellerName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/view?id=${productId}`}>View More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
