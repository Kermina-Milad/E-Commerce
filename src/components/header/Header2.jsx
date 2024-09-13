import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogTitle,
  Drawer,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTheme } from "@emotion/react";
import { CartContext } from '../cartContext';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginLeft: 0,
  minWidth: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const options = ["All Catagories", "Car", "Clothes", "Electronics"];


export default function Header2() {
  
  const { cartCount, cartItems} = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
console.log(cartItems);
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const theme = useTheme();
  console.log("cart",cartCount);
  const [opencart, setOpencart] =useState(false);

  const opencartdrawer = (newOpencart) => () => {
    setOpencart(newOpencart);
  };
  const DrawerList = (
  <Box sx={{ width: 450 }} role="presentation" onClick={opencartdrawer(false)}>
    <List>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            <Card
              key={product.id}
              sx={{
                maxWidth: 400,
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
                image={product.image}
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    {product.price}$
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </List>
  </Box>
);
const emails = ['Kerminamelad688@gmail.com', 'Kermina75@gmail.com'];

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>choose an account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "blue[100]", color: "blue[600]" }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
const [openuser, setOpenuser] =useState(false);

  const handleClickOpenuser = () => {
    setOpenuser(true);
  };

  const handleCloseuser = (value) => {
    setOpenuser(false);
  };
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>
      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        {/* <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.mycolor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              // padding: 0,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  width: 90,
                  textAlign: "center",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore
                sx={{
                  fontSize: "16px",
                }}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div> */}
      </Search>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartCount > 0 ? cartCount : null} color="primary">
            
            <ShoppingCartIcon  onClick={opencartdrawer(true)}/>
            <Drawer anchor="right" open={opencart} onClose={opencartdrawer(false)}>
        {DrawerList}
      </Drawer>
          </StyledBadge>
        </IconButton>
        <IconButton onClick={handleClickOpenuser}>
          <Person2OutlinedIcon />
        </IconButton>
        <SimpleDialog
        // selectedValue={selectedValue}
        open={openuser}
        onClose={handleCloseuser}
      />
      </Stack>
    </Container>
 
  );
}
