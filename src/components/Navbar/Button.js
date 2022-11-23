import { Typography } from "@mui/material";


const ButtonComp = () => {
    return (
      <div className="Button">
        <ButtonComponent/>
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
  
  export default ButtonComp;
  