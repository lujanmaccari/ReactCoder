import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Container sx={{ display: "grid", justifyContent: "center", mt: "20px" }}>
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
          <Typography variant="body2" color="text.secondary">
            Categoría: {product.category}
          </Typography>
          <Typography variant="h7" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
      <Link to={`/detail/${product.id}`} className="btn2">
        Ver más
      </Link>
    </Container>
  );
};
export default Item;
