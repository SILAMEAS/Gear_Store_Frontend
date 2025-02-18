import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, Box, Button, Card, CardContent, CircularProgress, IconButton, Typography} from "@mui/material";
import DrawerCustom from "../Drawer/DrawerCustom.tsx";
import {useDeleteCartMutation, useGetAllCartsQuery} from "../../redux/services/cartApi.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmptyCart from "../../utils/ui/empty/EmptyCart.tsx";
import {BoxProps} from "@mui/material/Box";
import getToken from "../../utils/local-storage/token/useGetToken.ts";

const HeaderCart = (props: Readonly<BoxProps>) => {
  const defaultStyle = {
    color: "primary.main",
    p: 0,
  };
  const {currentData}=useGetAllCartsQuery({},{skip:!getToken().access});
  const [deleteCart,resultDelete]=useDeleteCartMutation({})
    let subtotal = 0;
  return (
      <DrawerCustom
          renderButton={<Box sx={defaultStyle} {...props}>
              <Badge badgeContent={currentData?.total??0} color="primary">
                  <ShoppingCartOutlinedIcon sx={{color:getToken().access? "white":"grey"}}/>
              </Badge>
          </Box>}
          anchor={"right"}
          bgcolor={"black"}
          py={"20px"}
          px={"50px"}
      >
              <Box p={2} maxWidth={400} mx="auto" borderRadius={2} boxShadow={2}>
                  {/* Header */}
                  <Box display="flex" alignItems="center" gap={1}>
                      <ShoppingCartIcon />
                      <Typography variant="h6">Shopping Cart</Typography>
                  </Box>

                  {currentData?.contents?.length && currentData?.contents?.length<=0? <EmptyCart/>:
                      (  currentData?.contents?.map(item=>{
                          subtotal = subtotal+item.total_price;
                          return  <Card sx={{ mt: 2, display: "flex", alignItems: "center", px: 1 }} key={item.id} >
                              <img src={item.image} alt={item.image} width={60} height={60} style={{ borderRadius: 8 }} />
                              <CardContent sx={{ flexGrow: 1 }}>
                                  <Typography variant="body1">{item.name}</Typography>
                                  <Typography variant="body2">{item.quantity} × ${Number(item.price).toFixed(2)}</Typography>
                              </CardContent>
                              <IconButton color="error" onClick={async ()=>{
                                  try {
                                      await deleteCart({cartId:item.id}).unwrap();
                                  }catch (e){
                                      console.error("Delete Cart ",e)
                                  }
                              }}
                              sx={{cursor:"pointer"}}>
                                  {
                                      resultDelete.isLoading?<CircularProgress/>:  <DeleteIcon sx={{color:"red"}}/>
                                  }
                              </IconButton>
                          </Card>
                      })
                  )}

                  {/* Subtotal & Actions */}
                  <Box mt={2} p={2} bgcolor="black" borderRadius={2}>
                      <Typography variant="subtitle2" fontWeight="bold">SUBTOTAL:</Typography>
                      <Typography variant="h6" fontWeight="bold">${subtotal.toFixed(2)}</Typography>
                  </Box>

                  <Box mt={2} display="flex" flexDirection="column" gap={1}>
                      <Button variant="outlined" fullWidth>View Cart</Button>
                      <Button variant="contained" fullWidth sx={{ background: "linear-gradient(to right, purple, pink)" }}>
                          Checkout
                      </Button>
                  </Box>
              </Box>

      </DrawerCustom>
  );
};

export default HeaderCart;
