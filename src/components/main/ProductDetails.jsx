import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const ProductDetails = () => {

  return (
    <Box display={"flex"} alignItems={"center"} gap={2.5}
    mr={2} mt={3}
    flexDirection={{xs:"column" , sm:"row"}}>
      <Box sx={{display:"flex"}}>
        <img width={300} src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="" />
      </Box>
      <Box textAlign={{xs:"center", sm:"left"}}>
        <Typography variant="h5" component="h2">WOMENS FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6" component="h3">$12.99</Typography>
        <Typography variant="body1">
        Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica

        </Typography>
        <Stack sx ={{justifyContent:{xs:"center", sm:"left"}}} direction={"row"} gap={1} my={2}>
            {["https://mui.com/static/images/cards/contemplative-reptile.jpg","https://mui.com/static/images/cards/contemplative-reptile.jpg"].map((item)=>{
                return(
                    <img style={{borderRadius:3}} width={90} height={100} key={item} src={item} alt="photo"/>
                )
            })}
        </Stack>
        <Button 
        sx={{textTransform:"capitalize", mb:2,}}
        variant="contained" >
            <AddShoppingCartOutlinedIcon sx={{mr:1}} fontSize="small" />
            Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
