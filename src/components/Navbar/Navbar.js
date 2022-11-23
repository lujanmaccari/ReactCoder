import { Button } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*         <Typography>E-commerce</Typography>
       */}
      <Button
        variant="contained"
        className="Btn"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          fontSize: "10px",
        }}
      >
        Home
      </Button>
      <Button
        variant="contained"
        className="Btn"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          fontSize: "10px",
        }}
      >
        Productos
      </Button>
      <Button
        variant="contained"
        className="Btn"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          fontSize: "10px",
        }}
      >
        Carrito
      </Button>
    </div>
  );
};

export default Navbar;
