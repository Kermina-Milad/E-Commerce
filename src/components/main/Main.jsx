import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import { CartContext } from '../cartContext';
import { useContext } from 'react';

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    return () => {};
  }, []);
  useEffect(() => {
    setMyData(products); // Update myData when products changes
  }, [products]);
  const [productsMen, setProductsMen] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      .then((json) => setProductsMen(json));
    return () => {};
  }, []);
  const [productsWomen, setProductsWomen] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women%27s%20clothing")
      .then((res) => res.json())
      .then((json) => setProductsWomen(json));
    return () => {};
  }, []);
  
 const [myData, setMyData] = useState(products);


const { addProductToCart } = useContext(CartContext);
const handleAddToCart = (item) => {
  // @ts-ignore
  addProductToCart(item); // Pass the selected product to the addProductToCart function
  setOpen(false);
};

  
  const handleAlignment = (event, newValue) => {
    setMyData(newValue);
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedItem, setSelectedItem] = useState(null);

  if (products) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All Our New Ariivals In A Exclusive Brand Selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            sx={{
              ".Mui-selected": {
                backgroundColor: "initial",
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
              },
            }}
            color="error"
            // value={products}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            value={myData}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={products}
              aria-label="left aligned"

            >
              All Categories
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={productsMen}
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={productsWomen}
              aria-label="right aligned"
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {myData.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.35s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277, backgroundSize: "contain" }}
                  image={item.image}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      {" "}
                     {item.price}$
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => handleClickOpen(item)}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <VisibilityIcon
                      fontSize="small"
                      sx={{ mr: 1 }}
                    />
                    view details
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.rating.rate}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
            },
          }}
          className="border"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          {/* <ProductDetails /> */}
          {selectedItem && (
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2.5}
              mr={2}
              mt={3}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Box sx={{ display: "flex" }}>
                <img width={300} src={selectedItem?.image} alt="" />
              </Box>
              <Box textAlign={{ xs: "center", sm: "left" }}>
                <Typography variant="h5" component="h2">
                  {selectedItem?.title}
                </Typography>
                <Typography
                  my={0.4}
                  fontSize={"22px"}
                  color={"crimson"}
                  variant="h6"
                  component="h3"
                >
                  ${selectedItem?.price}
                </Typography>
                <Typography variant="body1">
                  {selectedItem?.description}
                </Typography>
                <Button
               onClick={(event) => {
                void handleAddToCart(selectedItem);
              }}
                  sx={{ textTransform: "capitalize", mb: 2, mt: 4 }}
                  variant="contained"
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  Add To Cart
                </Button>
              </Box>
            </Box>
          )}
        </Dialog>
      </Container>
    );
  }
};

export default Main;
