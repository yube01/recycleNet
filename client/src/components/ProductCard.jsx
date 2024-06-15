// ProductCard.js
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const ProductCard = ({ productName, categoryName, sellerName }) => {
  return (
    <Card className="product-card">
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
        <Button size="small">View More</Button> {/* Add Link to view product details */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
