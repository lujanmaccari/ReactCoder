import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <Card
        sx={{
          display: "grid",
          justifyContent: "center",
          m: 5,
          maxWidth: 500,
        }}
      >
        <CardMedia
          component="img"
          width="10"
          image={product.img}
          alt="img"
          sx={{ maxWidth: 300 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </CardContent>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </Card>
      <Link to={`/detail/${product.id}`}>Detail</Link>
    </div>
  );
};
export default Item;